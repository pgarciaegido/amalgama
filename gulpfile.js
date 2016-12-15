var gulp = require('gulp')
var postcss = require('gulp-postcss')
var cssnext = require('postcss-cssnext')
var cssnested = require('postcss-nested')
var mixins = require('postcss-mixins')
var atImport = require('postcss-import') // Para importar archivos
var vars = require('postcss-simple-vars') //vars like in Sass
var csswring = require('csswring') // Minify
var mqpacker = require('css-mqpacker') // Mete las querys en una sola
var browserSync = require('browser-sync').create()
var gulpWebpack = require('webpack-stream')
var webpack = require('webpack') // brings compatibility with uglify

// Servidor de desarrollo
gulp.task('serve', function () {
  browserSync.init({
    server: {
      baseDir: './dist'
    }
  })
})

// Tarea para procesar CSS
gulp.task('css', function () {
  var procesos = [
    atImport(),
    vars(),
    mixins(),
    cssnested,
    cssnext({browsers: ['>5%', 'ie 8']}),
    mqpacker,
    csswring()
  ]

  return gulp.src('./src/css/app.css')
    .pipe(postcss(procesos))
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.stream())
})

// Tarea para vigilar los cambios
gulp.task('watch', function () {
  gulp.watch('./src/*.css', ['css']) // El array ejecuta la tarea CSS.
  gulp.watch('./dist/*.html').on('change', browserSync.reload)
})

// Bundle js with webpack
gulp.task('scripts', function () {
  console.log('working...')
  return gulp.src('./src/js/app.js')
    .pipe(gulpWebpack({
      output: {filename: 'app.js'},
      plugins: [new webpack.optimize.UglifyJsPlugin()]
    }, webpack)) // Minifies
    .pipe(gulp.dest('./dist/js'))
})

gulp.task('default', ['watch', 'serve', 'css', 'scripts'])
gulp.task('build', ['scripts', 'css'])
