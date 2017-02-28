var User = require('../data/models/user').User

module.exports = {
  editUser
}
// Edits user info (password and email)
function editUser (req, res) {
  var id = req.params.id

  var newEmail = req.body.email
  var newPass = req.body.new_password
  var newPassVal = req.body.validate_password
  var currPass = req.body.current_password

  var update

  User.findById(id, function (err, u) {
    console.log(u)
    if (err) console.log(err)

    // Only modifying email
    if (newPass === '' || newPassVal === '' || currPass === '') {
      // If the email is the same of user, redirects to edit
      if(req.body.email === u.email) {
        res.redirect('/app/editar/' + u.username)
      // If the email is different, update new Email
      } else {
        update = {$set: {email: newEmail}}
      }
    }

    // If both password match and current password is user password
    else if (newPass === newPassVal && currPass === u.password){
      // If the new email = user email
      if (newEmail === u.email) {
        // Only update password
        update = {$set: {password: newPass}}
      } else {
        // Otherwise, update both password and email
        update = {$set: {email: newEmail, password: newPass}}
      }
    }
    // If update is not undefined, update the database with the query
    if(update !== undefined){
      User.findByIdAndUpdate(id, update, function (err, user) {
        if (err) {
          console.log('there is been an error updating the user: ' + err)
        }
        res.redirect('/app/editar/' + user.username)
      })
    }
  })
}
