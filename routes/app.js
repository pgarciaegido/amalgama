var express = require('express')
var router = express.Router()
var render = require('../controllers/render').renderIndex

router.get('/', function(req, res) {
  if (req.session) render()
  res.redirect('/invitado')
})

router.get('/logout', function (req, res) {
  req.session = null
  res.redirect('/invitado')
})

router.get('/noticia/:id', render)
router.get('/usuario/:username', render)
router.get('/editar/:username', render)
router.get('/buscar/', render)
router.get('/categoria/', render)

module.exports = router
