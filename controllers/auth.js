var User = require('../data/models/user').User
var u = require('./utils')

function signup (req, res) {
  var user = req.body.username
  var email = req.body.email
  var pass = req.body.password
  var repPass = req.body.password_confirmation

  var emailValidation = u.validateEmail(email)
  var passValidation = pass === repPass

  // Validates email
  if (!emailValidation) {
    res.redirect('/registrate?e=invalid?u=' + user + '?m=' + email)
  } // Validates password
  else if (!passValidation) {
    res.redirect('/registrate?e=dif?u=' + user + '?m=' + email)
  }

  var user = new User({
    username: req.body.username,
    email: email,
    password: pass
  })

  /* HERE THE PASSWORD GETS HASHED. LOGIS CON THE MODEL */

  // Using promises --> PREFERED
  user.save().then(function (us) {
    res.redirect('/app')
  }, function (err) {
    if (err) {
      console.log(String(err))
      res.send('No pudimos guardar tu info')
    }
  })
}

function login (req, res) {
  User.findOne({email: req.body.email, password: req.body.password}, function (err, user) {
    // if there is no user, gets back to /accede
    if (!user) {
      console.log(err)
      res.redirect('/accede')
    } else {
      req.session.user_id = user._id
      res.redirect('/app')
    }
  })
}

module.exports = {
  signup,
  login
}
