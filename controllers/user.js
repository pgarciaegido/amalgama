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

module.exports = {
  getCurrentUser
}
