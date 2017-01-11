var $ = require('jquery')

// ctx is an object!

module.exports = {
	getNew: getNew,
	getCurrentUser: getCurrentUser
}

function getNew (ctx, next) {
  $.get('/api/news', function (data) {
  	console.log('Getnews done!')
    // ctx is an object, then we add the news
    ctx.news = data
    next()
  })
}

function getCurrentUser (ctx, next) {
  $.get('/api/currentUser', function (data) {
  	console.log('Current_user done!')
    // ctx is an object, then we add the news
    ctx.user = data
    next()
  })
}
