var express = require('express')
var app = express()
var PORT = process.env.PORT || 8080

var bodyParser = require('body-parser') // req.body ---> Parse forms inputs
var User = require('./data/models/user').User // Collection User
var cookieSession = require('cookie-session')  
var router_app = require('./routes_app') // App/ routes
var session_middleware = require('./middlewares/session') // middleware to ensure that user is logged in
var methodOverride = require('method-override') // Overrides the POST method for PUT

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride('_method'))

app.use(cookieSession({
  name: 'session',
  keys: ['llave-1', 'llave-2']
}))

app.set('view engine', 'pug')

app.use(express.static('dist'))

app.get('/', function (req, res) {
  res.render('index')
})

app.get('/noticia/:id', function (req, res) {
  res.render('index')
})

app.get('/usuario/pegido', function (req, res) {
  res.render('index')
})

app.get('/usuario/pegido/editar', function (req, res) {
  res.render('index')
})

app.get('/registrate', function (req, res) {
  res.render('index')
})

app.post('/usersignup', function (req, res) {

  var user = new User({username: req.body.username,
                       email: req.body.email,
                       password: req.body.password,
                       password_confirmation: req.body.password_confirmation
                     })

  // Using promises --> PREFERED

  user.save().then(function (us) {
    console.log(us)
    res.send('Guardamos tu info')
  }, function (err) {
    if(err){
      console.log(String(err))
      res.send('No pudimos guardar tu info')
    }
  })
})

app.get('/accede', function (req, res) {
  res.render('index')
})

//Used when login
app.post('/sessions', function (req, res) {

  User.findOne({email: req.body.email, password: req.body.password}, function (err, user) {
    req.session.user_id = user._id
    res.redirect('/app')
  })
})

app.use('/app', session_middleware)
app.use('/app', router_app)

// //////////////////////////////////////////////////////////////////////
// This sets the current user info on this route, so we make an ajax call to get it on the client side 
app.use('/api/currentuser', session_middleware)
app.get('/api/currentuser', function (req, res) {

  var usersProjection = {
      password: false
  }

  User.findById(req.session.user_id, usersProjection, function(err, user) {
    res.send(user)
  })
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

app.get('/api/news', function (req, res) {
  var news = [
  {
    id: 0,
    title: 'Mateo Renzi es la persona indicada para liderar el cambio en italia',
    date: '12 diciembre 2016',
    tags: ['internacional, ', 'italia'],
    subtitle: 'Antes, sobre las 17.30, el todavía primer ministro comparecerá ante la dirección nacional del Partido Democrático (PD), del que es secretario general, para informar de la situación. Una reunión que se prevé tensa por cuanto el sector crítico del partido de centroizquierda ha hecho campaña por el no a las reformas constitucionales que pretendía Renzi',
    agreeVotes: 12,
    disagreeVotes: 18,
  },
  {
    id: 1,
    title: 'Puigdemont promete para 2017 un referéndum “legal y vinculante”',
    date: '30 diciembre 2016',
    tags: ['España, ', 'Cataluña'],
    subtitle: 'Antes, sobre las 17.30, el todavía primer ministro comparecerá ante la dirección nacional del Partido Democrático (PD), del que es secretario general, para informar de la situación. Una reunión que se prevé tensa por cuanto el sector crítico del partido de centroizquierda ha hecho campaña por el no a las reformas constitucionales que pretendía Renzi',
    agreeVotes: 25,
    disagreeVotes: 40
  },
  {
    id: 2,
    title: 'Merkel califica al terrorismo islamista como el “mayor desafío” de Alemania',
    date: '31 diciembre 2016',
    tags: ['Alemania, ', 'Internacional'],
    subtitle: 'Antes, sobre las 17.30, el todavía primer ministro comparecerá ante la dirección nacional del Partido Democrático (PD), del que es secretario general, para informar de la situación. Una reunión que se prevé tensa por cuanto el sector crítico del partido de centroizquierda ha hecho campaña por el no a las reformas constitucionales que pretendía Renzi',
    agreeVotes: 50,
    disagreeVotes: 42
  },
  {
    id: 3,
    title: '¿Cómo se construye un héroe olímpico?',
    date: '31 diciembre 2016',
    tags: ['Opinion, ', 'Deportes'],
    subtitle: 'Antes, sobre las 17.30, el todavía primer ministro comparecerá ante la dirección nacional del Partido Democrático (PD), del que es secretario general, para informar de la situación. Una reunión que se prevé tensa por cuanto el sector crítico del partido de centroizquierda ha hecho campaña por el no a las reformas constitucionales que pretendía Renzi',
    agreeVotes: 12,
    disagreeVotes: 5
  }
  ]

  res.send(news)
})

app.listen(PORT, function () {
  console.log('Escuchando en puerto ' + PORT + '!')
})
