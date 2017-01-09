var express = require('express')
var Image = require('./data/models/images.js')

var router = express.Router()

router.get('/', function (req, res) {
	res.render('index')
})

/* REST */
router.get('/imagenes/new', function (req, res) {
	res.render('app')
})

router.get('imagenes/:id/edit', function (req, res) {

})

router.route('/imagenes/:id')
	.get(function (req, res) {
		Image.findById(req.params.id, function(err, imagen) {
			res.render('show', {imagen:imagen})
		})
	})
	.put(function (req, res) {

	})
	.delete(function (req, res) {

	})

router.route('/imagenes/:id')
	.get(function (req, res) {

	})
	.post(function (req, res) {
		var data = {
			title: req.body.title
		}

		var imagen = new Image(data)

		imagen.save(function (err) {
			if(!err){
				console.log(imagen)
				res.redirect('/app/imagenes/' + imagen._id)
			}
			else{
				res.render(err)
			}
		})
	})

module.exports = router