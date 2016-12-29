var express = require('express')
var app = express()

app.set('view engine', 'pug')

app.use(express.static('dist'))

app.get('/', function (req, res) {
	res.render('index')
})

app.get('/noticia', function (req, res) {
	res.render('index')
})

app.get('/usuario/pegido', function(req, res) {
	res.render('index')
})

app.get('/usuario/pegido/editar', function(req, res) {
	res.render('index')
})

app.get('/registrate', function(req, res) {
	res.render('index')
})

app.get('/accede', function(req, res) {
	res.render('index')
})

app.listen(5000, function () {
	console.log('Escuchando en puerto 5000!!!')
})
