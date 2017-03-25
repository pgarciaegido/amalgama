var User = require('../data/models/user').User
var u = require('./utils')

module.exports = {
  editUser
}

// Edits user info (password and email)
function editUser (req, res) {
  var id       = req.params.id
  var username = req.headers.referer.split('/').pop()
  var session  = req.session.user_id

  // If not logged in
  if (!session  || id !== session) return res.send('You are not logged in.')

  // Gets form values
  var newEmail    = req.body.email
  var newEmailVal = req.body.verify_email
  var newPass     = req.body.new_password
  var newPassVal  = req.body.validate_password
  var currPass    = req.body.current_password

  // Empty form
  if (!newEmail && !newEmailVal && !newPass && !newPassVal && !currPass)
    return res.redirect('/app/editar/' + username)

  var updateEmail    = false
  var updatePassword = false


  // ************************** VERIFYING EMAIL  *****************************
  if (newEmail && newEmailVal) {
    // Emails dont match
    if (newEmail !== newEmailVal)
      return res.redirect('/app/editar/' + username + '?e=edif')

    // proper email format
    else if (!u.validateEmail(newEmail))
      return res.redirect('/app/editar/' + username + '?e=invalid')

    else updateEmail = true
  }


  // ********************** VERIFYING PASSWORD ********************************
  if (newPass && newPassVal) {
    // Passwords dont match
    if (newPass !== newPassVal)
      return res.redirect('/app/editar/' + username + '?e=dif')

    // Short password
    else if (newPass.length < 8)
      return res.redirect('/app/editar/' + username + '?e=shortp')

    else updatePassword = true
  }


  // *********** CHECKING USER EXISTS AND EXISTING PASSWORD  *****************

  var update

  User.findById(id, function (err, usr) {
    if (err) console.log(err)

    // If user does not exist
    if (!usr) return res.send('Error with user info. Access denied')

    // If both password match and current password is user password
    usr.comparePassword(currPass, function (err, isMatch) {
      if (err) return console.log(err)

      // If already existing password doesnt match with the user's
      if (!isMatch) return res.redirect('/app/editar/' + usr.username + '?e=cerrpass')


      // ************* UPDATE PASSWORD OR BOTH *******************************
      // method hosted in user model
      usr.encrypt(newPass, function(err, hashedPass) {
        if (err) return console.log(err)

        // Check what to update
        update = whatToUpdate(updateEmail, updatePassword, newEmail, hashedPass)

        User.findByIdAndUpdate(id, update, function (err, user) {
          if (err) {
            var error = dbErrorHandler(err)
            return res.redirect('/app/editar/' + username + '?e=' + error)
          }
          return res.redirect('/app/editar/' + username + '/?suc=upsuccess')
        })
      })
    })
  })
}

// Handles errors with db. For instance, duplicate email value.
function dbErrorHandler(err) {
  console.log('There is been an error' + err)
  // If the error mention email_1 means that email is already registered
  if (String(err).indexOf('email_1') !== -1)
    return 'eexists'

  return 'unknown'
}

// Setting what to update
function whatToUpdate(updateEmail, updatePassword, newEmail, hashedPass) {
  if (updateEmail && updatePassword)
  return {$set: {email: newEmail, password: hashedPass}}
  else if (!updateEmail && updatePassword)
  return {$set: {password: hashedPass}}
  else if (updateEmail && !updatePassword)
  return {$set: {email: newEmail}}
}
