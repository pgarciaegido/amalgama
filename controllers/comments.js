var Post = require('../data/models/posts')
var User = require('../data/models/user').User
var Com = require('../data/models/comments')
var moment = require('moment')

function createAgreeComment (req, res) {

  // Creates new comments register in db
  let comment = new Com ({
    userid: req.session.user_id,
    postid: req.headers.referer.split('/').pop(),
    agree: true,
    disagree: false,
    comment: req.body.create,
    date: 'now'
  })

  comment.save(function (err, comment) {
    if (!err) {
      console.log(comment)
      res.redirect(req.headers.referer)
    } else {
      console.log(err)
      res.send('ha habido un error al guardar tu comentario.')
    }
  })
}

module.exports = {
  createAgreeComment
}
