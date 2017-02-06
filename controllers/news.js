var Post = require('../data/models/posts')
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

module.exports = {
  createNew,
  getNews,
  getNew,
  modifyNew,
  deleteNew
}
