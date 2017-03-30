var express = require('express')
var app = express()
var bodyParser = require('body-parser') // req.body ---> Parse forms inputs
var cookieSession = require('cookie-session')

var sessionMiddleware = require('./middlewares/session') // middleware to ensure that user is logged in
var methodOverride = require('method-override') // Overrides the POST method for PUT

var auth = require('./controllers/auth') // Signup and login logics
var render = require('./controllers/render').renderIndex
var redirect = require('./controllers/render').redirectApp

var routerApp = require('./routes/app') // App/ routes
var routerApi = require('./routes/api')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.set('view engine', 'ejs')

// Serve the DIST folder
app.use(express.static('dist'))

// Overrides method in forms (from post to put)
app.use(methodOverride('_method'))

app.use(cookieSession({
  name: 'session',
  keys: ['llave1', 'llave2']
}))

// ************************ ROUTES FROM ROOT

app.get('/', render)
app.get('/invitado', render)
app.get('/registrate', render)
app.post('/signup', auth.signup)
app.get('/accede', render)
app.post('/login', auth.login)
app.get('/welcome', render)

// Use sessionMiddleware to ensure the user is logged in, and then we route from /app.

app.use('/app', sessionMiddleware)
app.use('/app', routerApp)

app.use('/api', routerApi)

module.exports = app
