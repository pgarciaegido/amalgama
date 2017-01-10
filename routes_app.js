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

router.get('/imagenes/:id/edit', function (req, res) {
	Image.findById(req.params.id, function(err, imagen) {
		res.render('edit', {imagen:imagen})
	})
})

router.route('/imagenes/:id')
	.get(function (req, res) {
		Image.findById(req.params.id, function(err, imagen) {
			res.render('show', {imagen:imagen})
		})
	})

	.post(function (req, res) {
		var data = {
			title: req.body.title
		}
		var imagen = new Image(data)
		imagen.save(function (err) {
			if(!err){
				res.redirect('/app/imagenes/' + imagen._id)
			}
			else{
				res.render(err)
			}
		})	
	})

	.put(function (req, res) {
		Image.findById(req.params.id, function(err, imagen) {
			imagen.title = req.body.title
			imagen.save(function (err){
				if(!err){
					res.render('show', {imagen:imagen})
				} else {
					res.render('edit', {imagen:imagen})
				}
			})
		})
	})

	.delete(function (req, res) {

	})

/* Al hacer res.render , y meter de segundo par un objeto, el key name es el nombre que queremos
mientras que su valor es lo que hemos pasado en el callback! */

router.route('/imagenes')
	.get(function (req, res) {
		Image.find({}, function (err, imagenes) {
			if (err) {
				res.redirect('/')
				return
			}
			res.render('imagenes', {imagenes: imagenes})
		})
	})
	.post(function (req, res) {
		var data = {
			title: req.body.title
		}

		var imagen = new Image(data)

		imagen.save(function (err) {
			if(!err){
				res.redirect('/app/imagenes/' + imagen._id)
			}
			else{
				res.render(err)
			}
		})
	})

module.exports = router
