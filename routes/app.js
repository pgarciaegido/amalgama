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
router.get('/buscar/', render)

module.exports = router
