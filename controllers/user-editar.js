var User = require('../data/models/user').User
var u = require('./utils')

module.exports = {
  editUser
}
// Edits user info (password and email)
function editUser (req, res) {
  var id = req.params.id
  var session = req.session.user_id

  // If not logged in
  if (!session) {
    return res.send('You are not logged in.')
  }

  var newEmail = req.body.email
  var newPass = req.body.new_password
  var newPassVal = req.body.validate_password
  var currPass = req.body.current_password

  var update

  User.findById(id, function (err, usr) {
    if (err) console.log(err)

    // If user does not exist or user is not the same as session.
    if (!usr || id !== session) {
      return res.send('Error with user info. Access denied')
    }

    // If email is not valid and its not empty, redirect and alert a message
    if (!u.validateEmail(newEmail) && newEmail !== ''){
      return res.redirect('/app/editar/' + usr.username + '?e=invalid')
    }

    // If the whole form is empty, just redirect to the same page
    else if (newEmail === '' && newPass === '' && newPassVal === '' && currPass === '') {
      return res.redirect('/app/editar/' + usr.username)
    }

    // Only modifying email
    else if (newPass === '' || newPassVal === '' || currPass === '') {
      // If the email is the same of user, redirects to edit
      if(newEmail === usr.email) {
        res.redirect('/app/editar/' + usr.username + '?e=esame')
      // If the email is different, update new Email
      } else {
        update = {$set: {email: newEmail}}
      }
    }

    // Passwords dont match
    else if (newPass !== newPassVal) {
      return res.redirect('/app/editar/' + usr.username + '?e=dif')
    }

    // If both password match and current password is user password
    usr.comparePassword(currPass, function (err, isMatch) {
      if (err) return console.log(err)

      if (!isMatch){
        return res.redirect('/app/editar/' + usr.username + '?e=cerrpass')
      }

      // method hosted in user model
      usr.encrypt(newPass, function(err, hashedPass) {
        if (err) return console.log(err)

        // If the new email = user email
        if (newEmail === usr.email) {
          // Only update password
          update = {$set: {password: hashedPass}}
        } else {
          // Otherwise, update both password and email
          update = {$set: {email: newEmail, password: hashedPass}}
        }

        // If update is not undefined, update the database with the query
        if(update !== undefined){
          User.findByIdAndUpdate(id, update, function (err, user) {
            if (err) {
              console.log('there is been an error updating the user: ' + err)
            }
            return res.redirect('/app/editar/' + user.username + '/?suc=upsuccess')
          })
        }
      })
    })
  })
}
