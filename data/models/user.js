var mongoose = require('mongoose')
var Schema = mongoose.Schema

// users es el nombre de mi DB, aunque también se llama así mi collection dentro de ella. OJO.
mongoose.connect('mongodb://localhost/users') // localhost/nombrebasedatos

var user_schema = new Schema({
	username: String,
	password: String,
	email: String,
	location: String
})

user_schema.virtual('password_confirmation').get(function () {
	return this.p_c
}).set(function (password) {
	this.p_c = password
})

// Our collection in mongodb is named after the string (first param), but it turns it to plural (adding S)
var User = mongoose.model('User', user_schema)

module.exports.User = User