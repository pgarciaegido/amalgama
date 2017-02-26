var Post = require('../data/models/posts')
var User = require('../data/models/user').User
var Com = require('../data/models/comments')
var moment = require('moment')

// Creates new comment
function createComment (req, res) {
  let postRoute = req._parsedUrl.path
  // The postiD is used on the second query
  let postId = req.headers.referer.split('/').pop()

  // Makes a query to the user collection to get the username of the author
  User.findById(req.session.user_id, function(err, user){
    if(err){
      return console.log(err)
    }

    // Sets if the comment is on agree or in disagree
    let ag = postRoute === '/commentagree' ? true : false
    let disag = postRoute === '/commentdisagree' ? true : false

    // Queries to get how many comments we have, so we can number our comments
    let arg = {postid: postId, agree: ag, disagree: disag}

    Post.findById(postId, function(err, post) {
      if (err){
        console.log(err)
      }

      Com.find(arg, function (err, comments) {
        if (err) return console.log('ha habido un error al obtener el numero de comentarios')

        let length = comments.length

        // Fills the schema
        let comment = new Com ({
          number: length + 1,
          userid: req.session.user_id,
          username: user.username,
          postid: req.headers.referer.split('/').pop(),
          postTitle: post.title,
          agree: ag,
          disagree: disag,
          comment: req.body.create,
          likes: 0
        })

        // Save the comment in the db
        comment.save(function (err, comment) {
          if (!err) {
            // Redirect to the post
            console.log(comment)
            res.redirect(req.headers.referer)
          } else {
            console.log(err)
            res.send('ha habido un error al guardar tu comentario.')
          }
        })
      })

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
  let path = req._parsedUrl.path
  let postId = req.url.split('/').pop()
  let condition

  // Conditional where the condition changes depending POST url
  if (path === `/get-comment-post/${postId}`)
    // Shows all comments from a post
    condition = {postid: postId}

  else if (path === `/get-comment-post-agree/${postId}`)
    // Shows only agree comments
    condition = {postid: postId, agree: true}

  else if (path === `/get-comment-post-disagree/${postId}`)
    // Shows only disagree comments
    condition = {postid: postId, disagree: true}

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

// Likes or unlikes comment
function likeComment (req, res) {

  let postId = req.headers.referer.split('/').pop()
  let userId = req.session.user_id

  // POST path to determine if the comment was already clicked
  let path = req._parsedUrl.path
  let commentId = path.split('/').pop()
  let update

  // If the POST path doesn't include unlike, increase the vote and include de user on the array
  if (path.indexOf('unlike') === -1){
    update = { $addToSet: { likedBy: userId }, $inc: { likes: 1 } }
  } else {
  // Otherwise remove the user from array and decrease 1.
    update = { $pull: { likedBy: userId }, $inc: { likes: -1 } }
  }

  // From the commentId, update the value and redirect to the post
  Com.findByIdAndUpdate(commentId, update, function (err, comment) {
    if(err) console.log(err)
    res.redirect('/app/noticia/' + postId)
  })
}


module.exports = {
  createComment,
  getComments,
  getCommentsPost,
  getCommentsUser,
  likeComment
}
