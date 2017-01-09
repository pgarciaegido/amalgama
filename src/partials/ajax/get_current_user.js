var $ = require('jquery')

// ctx is an object!

module.exports = function getCurrentUser (ctx, next) {
  $.get('/api/currentUser', function (data) {
    // ctx is an object, then we add the news
    ctx.user = data
    next()
  })
}
