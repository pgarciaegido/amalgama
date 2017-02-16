var Post = require('../data/models/posts')
var User = require('../data/models/user').User
var Com = require('../data/models/comments')
var moment = require('moment')

// Creates new comment
function createComment (req, res) {

  // Makes a query to the user collection to get the username of the author
  User.findById(req.session.user_id, function(err, user){
    if(err){
      return console.log(err)
    }

    // Fills the schema
    let comment = new Com ({
      userid: req.session.user_id,
      username: user.username,
      postid: req.headers.referer.split('/').pop(),
      agree: true,
      disagree: false,
      comment: req.body.create,
      date: 'now'
    })

    // Save the comment in the db
    comment.save(function (err, comment) {
      if (!err) {
        // Redirect to the post
        res.redirect(req.headers.referer)
      } else {
        console.log(err)
        res.send('ha habido un error al guardar tu comentario.')
      }
    })
  })
}

// Gets all the comments in collection
function getComments (req, res) {
  Com.find(function (err, comments) {
    if (err) {
      console.log(err)
    }
    res.send(comments)
  })
}

// Gets all the comments made in an specific post
function getCommentsPost (req, res) {

  let postId = req.url.split('/').pop()
  let condition = {postid: postId}
  Com.find(condition, function(err, comments) {
    if (err){
      console.log(err)
    }
    res.send(comments)
  })
}

// Gets all the comments made in an specific user
function getCommentsUser (req, res) {

  let userName = req.url.split('/').pop()
  let condition = {username: userName}
  Com.find(condition, function(err, comments) {
    if (err){
      console.log(err)
    }
    res.send(comments)
  })
}

module.exports = {
  createAgreeComment,
  getComments,
  getCommentsPost,
  getCommentsUser
}
