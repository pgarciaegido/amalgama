var User = require('../data/models/user').User


function signup (req, res) {
  var user = new User({
    username: req.body.username,
    email: req.body.email
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
  signup,
  login
}
