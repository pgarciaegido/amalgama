var mongoose = require('mongoose')
var Schema = mongoose.Schema

// users es el nombre de mi DB, aunque también se llama así mi collection dentro de ella. OJO.

var posiblesValores = ['M', 'F']
var emailMatch = [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Coloca un email válido']
var passwordValidation = {
  validator: function (pass) { // Has to return a boolean value
    return this.password_confirmation == pass
  },
  message: 'Las contraseñas no son iguales'
}

// El JSON dentro de los valores de los keys se usarán para validar
var userSchema = new Schema({
  username: {type: String, required: true, maxlength: [50, 'El nombre de usuario debe ser más corto']},
  password: {type: String, minlength: [8, 'La contraseña tiene que ser mayor de 8 caracteres'], validate: passwordValidation},
  age: {type: Number, min: [5, 'La edad no puede ser menor que 5'], max: [100, 'La edad no puede ser mayor que 100']},
  email: {type: String, required: 'El correo es obligatorio', match: emailMatch},
  location: String,
  sex: {type: String, enum: {values: posiblesValores, message: 'Opción no válida'}}
})

// estos virtuals sirven para pillar los datos de la confirmación del pass y compararlo, sin
// tener que meterlos en la bd.

userSchema.virtual('password_confirmation').get(function () {
  return this.p_c
}).set(function (password) {
  this.p_c = password
})

// Our collection in mongodb is named after the string (first param), but it turns
// it to plural (adding S)
var User = mongoose.model('User', userSchema)

module.exports.User = User
