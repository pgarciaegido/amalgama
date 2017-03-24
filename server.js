var config = require('./config')
var mongoose = require('mongoose')
var app = require('./app')

// ******** UNCOMMENT ON PRODUCTION ***********
// app.settings.env = 'production'

// Checks if is working on development or production for DB
app.settings.env === 'development' ? mongoose.connect(config.dbDev)
                                   : mongoose.connect(config.dbProd)


app.listen(config.port, function () {
  console.log('Escuchando en puerto ' + config.port + '!')
})
