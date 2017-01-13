var $ = require('jquery')

// ctx is an object!

module.exports = {
  getNew: getNew,
  getPost: getPost,
  getCurrentUser: getCurrentUser
}

function getNew (ctx, next) {
  $.get('/api/news', function (data) {
    ctx.news = data
    next()
  })
}

function getPost (ctx, next) {
  var id = ctx.path.split('/').pop()
  $.get('/api/news/' + id, function (data) {
    ctx.post = data
    next()
  })
}

function getCurrentUser (ctx, next) {
  $.get('/api/currentUser', function (data) {
    ctx.user = data
    next()
  })
}
