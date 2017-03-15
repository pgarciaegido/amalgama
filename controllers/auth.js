var User = require('../data/models/user').User
var u = require('./utils')

function signup (req, res) {
  var username = req.body.username
  var email = req.body.email
  var pass = req.body.password
  var repPass = req.body.password_confirmation

  var emailValidation = u.validateEmail(email)
  var passValidation = pass === repPass

  // Validates email
  if (!emailValidation) {
    res.redirect('/registrate?e=invalid?u=' + username + '?m=' + email)
  } // Validates password
  else if (!passValidation) {
    res.redirect('/registrate?e=dif?u=' + username + '?m=' + email)
  }

  var user = new User({
    username: req.body.username,
    email: email,
    password: pass
  })

  /* HERE THE PASSWORD GETS HASHED. LOGIS CON THE MODEL */

  // Using promises --> PREFERED
  user.save().then(function (us) {
    res.redirect('/welcome')
  }, function (err) {
    if (err) {
      // User already exists
      if (err.code === 11000){
        res.redirect('/registrate?e=uexists?u=' + username + '?m=' + email)
      // Password is too short
      } else if (err.errors.password.kind === 'minlength') {
        res.redirect('/registrate?e=shortp?u=' + username + '?m=' + email)
      }
      else{
        res.send('No pudimos guardar tu info')
      }
    }
  })
}

// Login
function login (req, res) {
  // Find user by username
  User.findOne({username: req.body.username}, function (err, user) {
    if (!user) {
      console.log(err)
      // If there is no user with that name, returns error message
      res.redirect('/accede?e=nouser?u=' + req.body.username)
    } else {
      // comparePassword method defined in model. Returns true or false
      user.comparePassword(req.body.password, function (err, isMatch) {
        if (err){
          console.log(err)
          res.redirect('/accede')
        }
        if(isMatch){
          // Cookies to remember user
          req.session.user_id = user._id
          res.redirect('/app')
        }
        else{
          res.redirect('/accede?e=errpass?u=' + user.username)
        }
      })
    }
  })
}

module.exports = {
  signup,
  login
}
