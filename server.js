var express = require('express')
var app = express()

app.set('view engine', 'pug');

app.use(express.static('dist'));

app.get('/', function (req, res) {
	res.render('index')
})

app.use('/noticia', express.static('dist/noticia.html'))

app.use('/registrate', express.static('dist/signup.html'))

app.use('/accede', express.static('dist/login.html'))

app.use('/usuario/pegido', express.static('dist/usuario.html'))

app.use('/usuario/pegido/editar', express.static('dist/usuario_editar.html'))



app.get('/tusmuertos', function (req, res) {
	res.sendFile(__dirname + '/dist/index.html')
})

app.listen(5000, function () {
	console.log('Escuchando en puerto 5000!!!')
})