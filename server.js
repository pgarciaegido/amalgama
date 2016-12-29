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

app.get('/api/user/pegido', function (req, res) {
	var user = {
		username: 'pegido',
		email: 'pgarciaegido@gmail.com',
		password: '123456789',
		avatar: '/img/avatar.jpg',
		location: 'Oviedo',
		rrss: {
			facebook: 'https://www.facebook.com/pablopolge',
			twitter: 'https://twitter.com/PolPolvo',
			linkedin: 'https://www.linkedin.com/in/pablo-garc%C3%ADa-egido-42115359?trk=hp-identity-name'
		},
		posts: [
			{
				id: 1,
				noticiaId: 1,
				post: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos nemo delectus molestias, omnis, deleniti rem vero quibusdam ea ut aliquid, nulla possimus ipsum quas facilis minus sunt obcaecati necessitatibus pariatur.',
				date: '04 diciembre de 2016',
				likes: 10
			},
			{
				id: 2,
				noticiaId: 1,
				post: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos nemo delectus molestias, omnis, deleniti rem vero quibusdam ea ut aliquid, nulla possimus ipsum quas facilis minus sunt obcaecati necessitatibus pariatur.',
				date: '05 diciembre de 2016',
				likes: 9
			}
		]
	}

	res.send(user)
})

app.listen(PORT, function () {
	console.log('Escuchando en puerto ' + PORT + '!')
})
