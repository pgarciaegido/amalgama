var Post = require('../data/models/posts')
var User = require('../data/models/user').User
var moment = require('moment')

// Create news.
function createNew (req, res) {
  var post = new Post({
    title: req.body.title,
    date: moment().format('DD MM YYYY'),
    tags: req.body.tags,
    subtitle: req.body.subtitle,
    agreeVotes: req.body.agreeVotes,
    disagreeVotes: req.body.disagreeVotes
  })

  post.save(function (err, post) {
    if (!err) {
      res.status(200).send({post: post})
    } else {
      console.log(err)
      res.send('ha habido un error al guardar tu noticia.')
    }
  })
}

// Get list of all news.
function getNews (req, res) {
  Post.find(function (err, post) {
    if (err) {
      console.log(err)
    }
    res.send(post)
  })
}


// Get only one new.
function getNew (req, res) {
  Post.findById(req.params.id, function (err, post) {
    if (err) return console.log('Ha habido un error' + err)
    res.send(post)
  })
}



function modifyNew (req, res) {
  var update = req.body

  Post.findByIdAndUpdate(req.params.id, update, function (err, post) {
    if (err) return console.log('Ha habido un error' + err)
    res.redirect('/api/news')
  })
}

function deleteNew (req, res) {
  Post.findById(req.params.id, function (err, post) {
    if (err) return console.log('Ha habido un error' + err)
    post.remove(function (err) {
      if (err) return console.log('Ha habido un error al borrar la noticia:' + err)
      res.redirect('/api/news')
    })
  })
}

// voting
function vote (req, res) {

  // Takes the _id in the url here and gets User id from session
  let userId = req.session.user_id
  let id = req.headers.referer.split('/').pop()

  // Gets the post URL. '/upvote'
  let path = req._parsedUrl.path

  // Push the id of the new to the user's array of voted news
  let userUpdate

  // Increases/decreases the agreeVotes/disagreeVotes of the post by 1
  let update

  // Conditional where the POST url tells what we want to do
  if (path === '/upvote') {
    userUpdate = { $addToSet: { agreeVotes: id }}
    update = { $inc: { agreeVotes: 1 }}
  }
  else if (path === '/unupvote') {
    userUpdate = { $pull: { agreeVotes: id }}
    update = { $inc: { agreeVotes: -1 }}
  }
  else if (path === '/downvote') {
    userUpdate = { $addToSet: { disagreeVotes: id }}
    update = { $inc: { disagreeVotes: 1 }}
  }
  else if (path === '/undownvote') {
    userUpdate = { $pull: { disagreeVotes: id }}
    update = { $inc: { disagreeVotes: -1 }}
  }

  User.findByIdAndUpdate(userId, userUpdate, function (err, user){
    if (err) return console.log('Ha habido un error' + err)
  })

  Post.findByIdAndUpdate(id, update, function (err, post){
    if (err) return console.log('Ha habido un error' + err)
    res.redirect(`/app/noticia/${id}`)
  })
}

module.exports = {
  createNew,
  getNews,
  getNew,
  modifyNew,
  deleteNew,
  vote
}
