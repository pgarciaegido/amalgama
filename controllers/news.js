var Post = require('../data/models/posts')

function createNew (req, res) {
  var post = new Post({
    id: req.body.id,
    title: req.body.title,
    date: moment().format('DD MM YYYY'),
    tags: req.body.tags,
    subtitle: req.body.subtitle,
    agreeVotes: req.body.agree,
    disagreeVotes: req.body.disagree
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

function getNews (req, res) {
  Post.find(function (err, post) {
    if (err) {
      console.log(err)
    }
    res.send(post)
  })
}

module.exports = {
  createNew,
  getNews
}
