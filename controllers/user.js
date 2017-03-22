var User = require('../data/models/user').User // Collection User

module.exports = {
  getCurrentUser
}

function getCurrentUser (req, res) {
  // Avoids showing password on the request
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
