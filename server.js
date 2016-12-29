var express = require('express')
var app = express()
var PORT = process.env.PORT || 8080

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

app.listen(PORT, function () {
	console.log('Escuchando en puerto ' + PORT + '!')
})
