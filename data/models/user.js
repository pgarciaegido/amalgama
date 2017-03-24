var mongoose = require('mongoose')
var Schema = mongoose.Schema
var bcrypt = require('bcrypt')

// USER SCHEMA =================================================================

// El JSON dentro de los valores de los keys se usarán para validar
var UserSchema = new Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true, minlength: [8, 'La contraseña tiene que ser mayor de 8 caracteres']},
  email: {type: String, required: 'El correo es obligatorio', unique: true},
  agreeVotes: Array,
  disagreeVotes: Array,
})


// ENCRYPT PASSWORD ============================================================

var saltRounds = 10

// Encripta la contraseña
UserSchema.pre('save', function(next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(saltRounds, function(err, salt) {
        if (err) return next(err);

        // hash the password along with our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

// COMPARE PASSWORD ON LOGIN ===================================================

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        console.log(candidatePassword, this.password)
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

// ENCRYPT PASSWORD WHEN EDITING ===============================================

UserSchema.methods.encrypt = function(password, callback) {
  // generate a salt
  bcrypt.genSalt(saltRounds, function(err, salt) {
      if (err) return next(err);

      // hash the password along with our new salt
      bcrypt.hash(password, salt, function(err, hash) {
          if (err) return next(err);
          callback(null, hash);
      })
  })
}

// Our collection in mongodb is named after the string (first param), but it turns
// it to plural (adding S)
var User = mongoose.model('User', UserSchema)

module.exports.User = User
