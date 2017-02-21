import $ from 'jquery'

// ctx is an object!

module.exports = {
  getNew,
  getAsideNew,
  getPost,
  getCurrentUser,
  getAllComments,
  getCommentsAgree,
  getCommentsDisagree
}

function getNew (ctx, next) {
  $.get('/api/news', (data) => {
    ctx.news = data
    next()
  })
}

function getAsideNew (ctx, next) {
  $.get('/api/order-temas', (data) => {
    ctx.ordered = data
    next()
  })
}

function getPost (ctx, next) {
  var id = ctx.path.split('/').pop()
  $.get('/api/news/' + id, (data) => {
    ctx.post = data
    next()
  })
}

function getCurrentUser (ctx, next) {
  $.get('/api/currentUser', (data) => {
    ctx.user = data
    next()
  })
}

function getAllComments (ctx, next) {
  $.get('/api/get-comments', (data) => {
    ctx.comments = data
    next()
  })
}

function getCommentsAgree (ctx, next) {
  var id = ctx.path.split('/').pop()
  $.get('/api/get-comment-post-agree/' + id, (data) => {
    ctx.commentsAgree = data
    next()
  })
}

function getCommentsDisagree (ctx, next) {
  var id = ctx.path.split('/').pop()
  $.get('/api/get-comment-post-disagree/' + id, (data) => {
    ctx.commentsDisagree = data
    next()
  })
}
