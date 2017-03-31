var Post = require('../data/models/posts')
var User = require('../data/models/user').User
var moment = require('moment')
var adminPassword = require('./secret').password

module.exports = {
  createNew,
  getNews,
  getNew,
  modifyNew,
  deleteNew,
  vote
}

// Create news =================================================================
function createNew (req, res) {
  // Verifies if password is correct
  var password = req.body.password
  var media    = req.body.media

  if (password !== adminPassword) {
    res.send('Incorrect password.')
  }
  let jsonParsed
  // Checks if media JSON is correctly formatted
  try {
    jsonParsed = JSON.parse(media)
  } catch (e) {
    return res.send('The media JSON is incorrectly formatted. Please double check. ' + e)
  }

  var post = new Post({
    title: req.body.title,
    subtitle: req.body.subtitle,
    tags: req.body.tags,
    media: jsonParsed
  })

  post.save(function (err, post) {
    if (!err) {
      res.status(200).send({post: post})
    } else {
      console.log(err)
      res.redirect('/api/create-new')
    }
  })
}

// Get list of all news ========================================================
function getNews (req, res) {
  Post.find(function (err, post) {
    if (err) {
      console.log(err)
    }
    res.send(post)
  })
}


// Get only one new ============================================================
function getNew (req, res) {
  Post.findById(req.params.id, function (err, post) {
    if (err) return console.log('Ha habido un error' + err)
    res.send(post)
  })
}


// Updates new already posted ==================================================
function modifyNew (req, res) {
  var password = req.body.password

  if (password !== adminPassword) {
    return res.send('Password incorrect. Denied')
  }

  var postId = req.params.id
  var update = req.body

  Post.findByIdAndUpdate(postId, update, function (err, post) {
    if (err) {
      return console.log('Ha habido un error' + err)
    }
    res.redirect('/api/news/' + postId)
  })
}


// Deletes new =================================================================
function deleteNew (req, res) {
  password = req.body.password

  if (password !== adminPassword) {
    res.send('Password incorrect. Denied.')
  }
  else{
    Post.findById(req.params.id, function (err, post) {
      if (err) return console.log('Ha habido un error' + err)
      post.remove(function (err) {
        if (err) return console.log('Ha habido un error al borrar la noticia:' + err)
        res.redirect('/api/news')
      })
    })
  }
}

// voting ======================================================================
function vote (req, res) {
  // Takes the _id in the url here and gets User id from session
  let userId = req.session.user_id
  // If there is no session or the session cookie is modified, returns undefined
  if (userId === undefined) {
    return res.send('Error. User does not exist')
  }


  let postId
  // If there is no post id referer
  try{
    postId = req.headers.referer.split('/').pop()
  }
  catch(e){
    console.log(e)
    return res.send('Error. Post referer not included')
  }

  // Gets the post URL. '/upvote'
  let path = req._parsedUrl.path

  // Check if user has already liked
  let voted = false
  User.findById(userId, function(err, u) {
    if (err) return console.log(err)

    // Check if user has already liked or disliked a post
    for (let i in u.agreeVotes) {
      if (u.agreeVotes[i] === postId)
        voted = true
    }

    if (!voted) {
      for (let i in u.disagreeVotes) {
        if (u.disagreeVotes[i] === postId)
          voted = true
      }
    }

    // Push the id of the new to the user's array of voted news
    let userUpdate

    // Increases/decreases the agreeVotes/disagreeVotes of the post by 1
    let update

    // Get if is thumb up or thumb down
    let agree = false

    // Conditional where the POST url tells what we want to do
    if (path === '/upvote') {
      if (voted) return res.send('Error. You have voted already')

      userUpdate = { $addToSet: { agreeVotes: postId }}
      update = { $inc: { agreeVotes: 1 }}
      agree = true
    }
    else if (path === '/unupvote') {
      if (!voted) return res.send('Error. You havent voted')

      userUpdate = { $pull: { agreeVotes: postId }}
      update = { $inc: { agreeVotes: -1 }}
      agree = true
    }
    else if (path === '/downvote') {
      if (voted) return res.send('Error. You have voted already')

      userUpdate = { $addToSet: { disagreeVotes: postId }}
      update = { $inc: { disagreeVotes: 1 }}
    }
    else if (path === '/undownvote') {
      if (!voted) return res.send('Error. You havent voted')

      userUpdate = { $pull: { disagreeVotes: postId }}
      update = { $inc: { disagreeVotes: -1 }}
    }

    // Ensures post exists, then appends post to users array
    // Find post
    Post.findByIdAndUpdate(postId, update, function (err, post){
      if (err) return console.log('Error. Ha habido un error ' + err)

      // If post does not exist (modified headers)
      if(!post) return res.send('Error. Post does not exist. Check headers')

      // Find user
      User.findByIdAndUpdate(userId, userUpdate, function (err, user){
        if (err) return console.log('Error. Ha habido un error' + err)

        if (agree) return res.send(String(post.agreeVotes))

        return res.send(String(post.disagreeVotes))
      })
    })
  })
}
