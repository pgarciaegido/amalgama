var User = require('../data/models/user').User
var u = require('./utils')

module.exports = {
  signup,
  login
}

// SIGNUP ======================================================================

function signup (req, res) {
  var username = req.body.username
  var email    = req.body.email
  var pass     = req.body.password
  var repPass  = req.body.password_confirmation

  var emailValidation = u.validateEmail(email)
  var passValidation = pass === repPass

  // Validates email
  if (!emailValidation) {
    res.redirect('/registrate?e=invalid?u=' + username + '?m=' + email)
  } // First password validation
  else if (!passValidation) {
    res.redirect('/registrate?e=dif?u=' + username + '?m=' + email)
  }

  var user = new User({
    username: req.body.username,
    email   : email,
    password: pass
  })

  /* HERE THE PASSWORD GETS HASHED; LOGICS ON USER MODEL */

  // Using promises --> PREFERED
  user.save().then(function (us) {
    // Set cookies --> welcome page --> (happens on client)/app
    req.session.user_id = us._id
    res.redirect('/welcome')

  }, function (err) {
    if (err) {

      // User or email already exists
      if (err.code === 11000){
        console.log(err.message)
        // Error message (username_1 and email_1):
        // E11000 duplicate key error collection: users.users index: username_1 dup key: { : "test" }
        if (err.message.indexOf('email_1') != -1) {
          res.redirect('/registrate?e=eexists?u=' + username + '?m=' + email)
        }

        else if (err.message.indexOf('username_1') != -1){
          res.redirect('/registrate?e=uexists?u=' + username + '?m=' + email)
        }

      // Password is too short
      } else if (err.errors.password.kind === 'minlength') {
        res.redirect('/registrate?e=shortp?u=' + username + '?m=' + email)
      }

      else{
        res.send('No pudimos guardar tu info... Vuelve a intentarlo')

        setTimeout(function () {
          res.redirect('/registrate')
        }, 2000)
      }
    }
  })
}


// LOGIN =======================================================================

function login (req, res) {
  var username = req.body.username
  var password = req.body.password
  // Find user by username
  User.findOne({username: username}, function (err, user) {
    if (!user) {
      console.log(err)
      // If there is no user with that name, returns error message
      return res.redirect('/accede?e=nouser?u=' + username)
    } else {
      // comparePassword method defined in model. Returns true or false
      user.comparePassword(password, function (err, isMatch) {
        if (err){
          console.log(err)
          return res.redirect('/accede')
        }
        // If matches
        if(isMatch){
          // Cookies to remember user
          req.session.user_id = user._id
          return res.redirect('/app')
        }
        // If it doesnt match
        else{
          return res.redirect('/accede?e=errpass?u=' + user.username)
        }
      })
    }
  })
}
