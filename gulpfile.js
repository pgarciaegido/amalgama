var gulp        = require('gulp')
var postcss     = require('gulp-postcss')
var cssnext     = require('postcss-cssnext')
var cssnested   = require('postcss-nested')
var mixins      = require('postcss-mixins')
var atImport    = require('postcss-import') // Para importar archivos
var vars        = require('postcss-simple-vars') // vars like in Sass
var csswring    = require('csswring') // Minify
var styleLint   = require('gulp-stylelint') // Linter
var mqpacker    = require('css-mqpacker') // Mete las querys en una sola

var browserSync = require('browser-sync').create()
var gulpWebpack = require('webpack-stream')
var webpack     = require('webpack') // brings compatibility with uglify
var panini      = require('panini')
var plumber     = require('gulp-plumber') // on error it stops from crashing
var sourcemaps  = require('gulp-sourcemaps')
var babel       = require('gulp-babel')
var babelLoader = require('babel-loader')

var argv = require('yargs').argv
var gulpif = require('gulp-if')


// Panini HTML modules =========================================================
gulp.task('panini', function () {
  gulp.src('src/pages/**/*.html')
    .pipe(panini({
      root: 'src/pages/',
      layouts: 'src/layouts/',
      partials: 'src/partials/',
      helpers: 'helpers/',
      data: 'data/'
    }))
    .pipe(gulp.dest('./dist'))
})


// Processing CSS ==============================================================
gulp.task('css', function () {
  var process = [
    atImport(),
    vars(),
    mixins(),
    cssnested,
    cssnext({browsers: ['>5%', 'ie 8']}),
    mqpacker
  ]

  var min = [ csswring() ]

  // If --production flag on call, minifies.
  // $ gulp css --production
  return gulp.src('./src/css/app.css')
    .pipe(plumber())
    .pipe(postcss(process))
    .pipe(gulpif(argv.production, postcss(min)))
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.stream())
})


// Tarea para vigilar los cambios ==============================================
gulp.task('watch', function () {
  // gulp.watch('src/{layouts,partials,pages}/**/*', ['panini'])
  gulp.watch('src/css/**/*.css', ['css']) // El array ejecuta la tarea CSS.
  gulp.watch('src/partials/**/*.js', ['scripts'])
  // gulp.watch('src/img/*', ['images'])
  gulp.watch('./dist/*.html').on('change', browserSync.reload)
})


// Bundle JS with webpack ======================================================
gulp.task('scripts', function () {
  var dev = {
    module: {
      loaders: [{
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }]
    },
    output: {filename: 'app.js'}
  }

  // Same as dev but it minifies.
  var prod = {
    module: {
      loaders: [{
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }]
    },
    output: {filename: 'app.js'},
    node: {fs: "empty"},
    plugins: [new webpack.optimize.UglifyJsPlugin()]
  }
  // If it has --production flag, minify.
  return gulp.src('./src/app.js')
    .pipe(argv.production ? gulpWebpack(prod, webpack) : gulpWebpack(dev, webpack))
    .pipe(gulp.dest('./dist'))
})


// Send IMAGES =================================================================
gulp.task('images', function () {
  return gulp.src('./src/img/**/*')
    // .pipe(imagemin())
    .pipe(gulp.dest('./dist/img'))
})


// CSS linter ==================================================================
gulp.task('csslinter', function () {
  return gulp.src('src/css/**/*.css')
    .pipe(styleLint({
      reporters: [
        {formatter: 'string', console: true}
      ]
    }))
})


gulp.task('default', ['watch', 'css', 'scripts', 'images'/* , 'panini' */])
gulp.task('build', ['scripts', 'css'])
