var express = require('express')
var Image = require('./data/models/images.js')
var router = express.Router()
var image_finder_middleware = require('./middlewares/find_image')

router.get('/', function (req, res) {
	res.render('index')
})

/* REST */
router.get('/imagenes/new', function (req, res) {
	res.render('app')
})

/* The * means that anything can follow. Basically it will afect everthing starting with /images/:id
This works as a middleware, so all the queries byId are asked from here*/
router.all('/imagenes/:id*', image_finder_middleware)

router.get('/imagenes/:id/edit', function (req, res) {
	res.render('edit')
})

router.route('/imagenes/:id')
	.get(function (req, res) {
		res.render('show')
	})

	.put(function (req, res) {
		res.locals.imagen.title = req.body.title
		res.locals.imagen.save(function (err){
			if(!err){
				res.render('show')
			} else {
				res.render('edit')
			}
		})
	})

	.delete(function (req, res) {
		Image.findOneAndRemove({_id: req.params.id}, function(err, imagen){
			if (!err) {
				res.redirect("/app/imagenes")
			} else {
				console.log(err)
				res.redirect('/app/imagenes' + req.params.id)
			}
		})
	})

router.route('/updateimage')
	.post(function (req, res) {
		console.log(res.locals.user._id)
		var data = {
			title: req.body.title,
			creator: res.locals.user._id
		}
		var imagen = new Image(data)
		imagen.save(function (err) {
			if(!err){
				res.redirect('/app/imagenes/' + imagen._id)
			}
			else{
				console.log(imagen)
				res.render(err)
			}
		})
	})	

router.post('/logout', function (req, res) {
	req.session = null
	res.redirect('/app')
})

/* Al hacer res.render , y meter de segundo par un objeto, el key name es el nombre que queremos
mientras que su valor es lo que hemos pasado en el callback! */

router.route('/imagenes')
	.get(function (req, res) {
		Image.find({creator: res.locals.user._id}, function (err, imagenes) {
			if (err) {
				console.log('hay un error ' + err)
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
