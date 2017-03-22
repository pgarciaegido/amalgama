var config = require('./config')
var mongoose = require('mongoose')
var app = require('./app')


app.settings.env = 'production'
// Checks if is working on development or production
if (app.settings.env === 'development'){
  mongoose.connect(config.dbDev)
}
else {
  mongoose.connect(config.dbProd)
}


console.log('app.settings.env -_> ' + app.settings.env)

app.listen(config.port, function () {
  console.log('Escuchando en puerto ' + config.port + '!')
})
