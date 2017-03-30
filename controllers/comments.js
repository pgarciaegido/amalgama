var Post = require('../data/models/posts')
var User = require('../data/models/user').User
var Com = require('../data/models/comments')
var moment = require('moment')

module.exports = {
  createComment,
  getComments,
  getCommentsPost,
  getCommentsUser,
  likeComment
}

// Creates new comment =========================================================
function createComment (req, res) {

  // Makes a query to the user collection to get the username of the author
  User.findById(req.session.user_id, function(err, user){
    if(err){
      return console.log(err)
    }
    // If there is no session
    if (!user) {
      return res.send('Your not logged in. Access denied.')
    }

    let postRoute = req._parsedUrl.path
    // The postiD is used on the second query
    let postId = req.headers.referer.split('/').pop()

    Post.findById(postId, function(err, post) {
      if (err){
        console.log(err)
      }

      if (!post) {
        return res.send('The post does not exist. Access denied.')
      }

      // Sets if the comment is on agree or in disagree
      let ag = postRoute === '/commentagree' ? true : false
      let disag = postRoute === '/commentdisagree' ? true : false

      // Queries to get how many comments we have, so we can number our comments
      let arg = {postid: postId, agree: ag, disagree: disag}

      Com.find(arg, function (err, comments) {
        if (err) return console.log('ha habido un error al obtener el numero de comentarios')

        let length = comments.length
        console.log('Number of comments: ' + length)

        // Fills the schema
        let comment = new Com ({
          number   : length + 1,
          userid   : req.session.user_id,
          username : user.username,
          postid   : postId,
          postTitle: post.title,
          agree    : ag,
          disagree : disag,
          comment  : req.body.create,
          likes    : 0
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

    })
  })
}

// Gets all the comments in collection =========================================
function getComments (req, res) {
  Com.find(function (err, comments) {
    if (err) {
      console.log(err)
    }
    res.send(comments)
  })
}

// Gets all the comments made in an specific post ==============================
function getCommentsPost (req, res) {
  let postId = req.params.id
  let query  = req.query.s
  let condition

  // Conditional where the condition changes depending on query
  // /api/get-comment-post/{id}/?s={agree}
  if (query === 'agree'){
    condition = {postid: postId, agree: true}
  }

  else if (query === 'disagree'){
    condition = {postid: postId, disagree: true}
  }

  Com.find(condition).sort({date: -1}).exec(function(err, comments) {
    if (err){
      console.log(err)
    }
    res.send(comments)
  })
}

// Gets all the comments made in an specific user ==============================
function getCommentsUser (req, res) {
  let userName  = req.params.username
  let condition = {username: userName}

  Com.find(condition).sort({date: -1}).exec(function(err, comments) {
    if (err){
      console.log(err)
    }
    res.send(comments)
  })
}

// Likes or unlikes comment ====================================================
function likeComment (req, res) {
  let userId = req.session.user_id

  // Ensure user is logged in and exists
  User.findById(userId, function(err, user) {
    if (err) {
      console.log(err)
      return res.send('Error. There is been an error checking user. Try again.')
    }

    if (!user) {
      return res.send('Error. There is no user logged in. Access denied.')
    }

    let postId
    // If headers are missing
    try{
      postId = req.headers.referer.split('/').pop()
    }
    catch(e) {
      console.log('Trying to get POST ID error: ' + e)
      return res.send('Error. Headers should include referer. Access denied')
    }

    // Ensures that post exists
    Post.findById(postId, function(err, post) {
      if (err) {
        console.log(err)
        return res.send('Error. There is been an error checking post. Try again.')
      }
      if (!post) {
        return res.send('Error. This post does not exist. Access denied.')
      }

      // POST path to determine if the comment was already clicked
      let path      = req._parsedUrl.path
      let commentId = path.split('/').pop()

      // Checks if comment is liked by the logged in user. If it is, unlike.
      Com.findById(commentId, function (err, com) {
        if (err) {
          console.log(err)
          return res.send('Error. There is been an error checking comment.')
        }

        if(!com) {
          return res.send('Error. This comment does not exist.')
        }

        let liked = false

        for (let c in com.likedBy) {
          if (userId === com.likedBy[c])
            liked = true
        }

        let update = liked === false ? { $addToSet: { likedBy: userId }, $inc: { likes: 1 } }
                                     : { $pull    : { likedBy: userId }, $inc: { likes: -1 } }

        // From the commentId, update the value and redirect to the post
        Com.findByIdAndUpdate(commentId, update, function (err, comment) {
          if(err) return console.log(err)
          return res.send(String(comment.likedBy.length))
        })
      })
    })
  })
}
