var User = require('../data/models/user').User // Collection User

function getCurrentUser (req, res) {
  var usersProjection = {
    password: false
  }

  User.findById(req.session.user_id, usersProjection, function (err, user) {
    if (err) {
      console.log(err)
    }
    res.send(user)
  })
}

function signup (req, res) {
  var user = new User({username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    password_confirmation: req.body.password_confirmation
  })

  // Using promises --> PREFERED

  user.save().then(function (us) {
    console.log(us)
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
  getCurrentUser,
  signup,
  login
}
