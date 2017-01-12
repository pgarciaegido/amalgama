var $ = require('jquery')

// ctx is an object!

module.exports = {
  getNew: getNew,
  getCurrentUser: getCurrentUser
}

function getNew (ctx, next) {
  $.get('/api/news', function (data) {
    ctx.news = data
    next()
  })
}

function getCurrentUser (ctx, next) {
  $.get('/api/currentUser', function (data) {
    ctx.user = data
    next()
  })
}
