var config = require('./config')
var mongoose = require('mongoose')
var app = require('./app')

// mongoose.connect('mongodb://heroku_b309pz7s:rokbgcdt1m9r767tmhugv141vi@ds161008.mlab.com:61008/heroku_b309pz7s') // localhost/nombrebasedatos
mongoose.connect(config.db)

app.listen(config.port, function () {
  console.log('Escuchando en puerto ' + config.port + '!')
})
