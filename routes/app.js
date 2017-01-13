var express = require('express')
var router = express.Router()
var render = require('../controllers/render').renderIndex

// var imageFinderMiddleware = require('./middlewares/find_image')
// var multer = require('multer')
// var ext = require('file-extension')
// var fs = require('fs-extra')

// ************ UPLOADING FILES SET UP

// var storage = multer.diskStorage({
//   destination: function (req, file, callback) {
//     callback(null, './uploads')
//   },
//   filename: function (req, file, callback) {
//     callback(null, file.fieldname + '-' + Date.now() + '.' + ext(file.originalname))
//   }
// })
//
// var upload = multer({ storage: storage}).single('archivo')

// ************ UPLOADING FILES SET UP

router.get('/', render)

router.post('/logout', function (req, res) {
  req.session = null
  res.redirect('/app')
})

router.get('/noticia/:id', render)

router.get('/usuario/:username', render)

module.exports = router

/* ********************* IMAGENES ************************ */

// router.get('/imagenes/new', function (req, res) {
//   res.render('app')
// })
//
// /* The * means that anything can follow. Basically it will afect everthing starting with /images/:id
// This works as a middleware, so all the queries byId are asked from here */
// router.all('/imagenes/:id*', imageFinderMiddleware)
//
// router.get('/imagenes/:id/edit', function (req, res) {
//   res.render('edit')
// })
//
// router.route('/imagenes/:id')
//   .get(function (req, res) {
//     res.render('show')
//   })
//
//   .put(function (req, res) {
//     res.locals.imagen.title = req.body.title
//     res.locals.imagen.save(function (err) {
//       if (!err) {
//         res.render('show')
//       } else {
//         res.render('edit')
//       }
//     })
//   })
//
//   .delete(function (req, res) {
//     Image.findOneAndRemove({_id: req.params.id}, function (err, imagen) {
//       if (!err) {
//         res.redirect('/app/imagenes')
//       } else {
//         console.log(err)
//         res.redirect('/app/imagenes' + req.params.id)
//       }
//     })
//   })
//
// router.route('/updateimage')
//   .post(upload, function (req, res) {
//     var extension = req.file.originalname.split('.').pop()
//     var data = {
//       title: req.body.title,
//       creator: res.locals.user._id,
//       extension: extension
//     }
//     var imagen = new Image(data)
//     console.log(req.file.path)
//     console.log(imagen._id)
//     console.log(extension)
//     imagen.save(function (err) {
//       if (!err) {
//         fs.copy(req.file.path, './dist/img/uploads/' + imagen._id + '.' + extension)
//         res.redirect('/app/imagenes/' + imagen._id)
//       } else {
//         res.render(err)
//       }
//     })
//   })
//
// /* Al hacer res.render , y meter de segundo par un objeto, el key name es el nombre que queremos
// mientras que su valor es lo que hemos pasado en el callback! */
//
// router.route('/imagenes')
//   .get(function (req, res) {
//     // pasarle el creator hace que solo muestr las imagenes subidas por el usuario
//     Image.find({creator: res.locals.user._id}, function (err, imagenes) {
//       if (err) {
//         console.log('hay un error ' + err)
//         res.redirect('/')
//         return
//       }
//       res.render('imagenes', {imagenes: imagenes})
//     })
//   })
//
//   .post(function (req, res) {
//     var data = {
//       title: req.body.title
//     }
//
//     var imagen = new Image(data)
//
//     imagen.save(function (err) {
//       if (!err) {
//         res.redirect('/app/imagenes/' + imagen._id)
//       } else {
//         res.render(err)
//       }
//     })
//   })

/* ********************* IMAGENES ************************ */
