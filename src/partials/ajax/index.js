var $ = require('jquery')

// ctx is an object!

module.exports = {
	getNew: getNew,
	getCurrentUser: getCurrentUser
}

function getNew (ctx, next) {
  $.get('/api/news', function (data) {
    // ctx is an object, then we add the news
    console.log(data)
    ctx.news = data
    next()
  })
}

function getCurrentUser (ctx, next) {
  $.get('/api/currentUser', function (data) {
    // ctx is an object, then we add the news
    ctx.user = data
    next()
  })
}
