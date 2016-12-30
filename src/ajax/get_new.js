var $ = require('jquery')

// ctx is an object!

module.exports = function getNew (ctx, next) {
  $.get('/api/news', function (data) {
    // ctx is an object, then we add the news
    ctx.news = data
    next()
  })
}
