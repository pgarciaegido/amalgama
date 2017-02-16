var mongoose = require('mongoose')
var Schema = mongoose.Schema
var bcrypt = require('bcrypt')

// El JSON dentro de los valores de los keys se usarán para validar
var userSchema = new Schema({
  username: {type: String, required: true, maxlength: [50, 'El nombre de usuario debe ser más corto']},
  password: {type: String, minlength: [8, 'La contraseña tiene que ser mayor de 8 caracteres']},
  email: {type: String, required: 'El correo es obligatorio'},
  location: String,
  agreeVotes: Array,
  disagreeVotes: Array,
})

// Encripta la contraseña

// userSchema.pre('save', (next) => {
//   let user = this
//   // if (!user.isModified('password')) return next()
//
//   bcrypt.genSalt(10, function (err, salt) {
//     if (err) return next()
//
//     bcrypt.hash(user.password, salt, null, function (err, hash) {
//       if (err) return next()
//
//       user.password = hash
//       next()
//     })
//   })
// })

// Our collection in mongodb is named after the string (first param), but it turns
// it to plural (adding S)
var User = mongoose.model('User', userSchema)

module.exports.User = User
