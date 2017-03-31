import { get } from 'jquery'

module.exports = {
  getNew,
  getAsideNew,
  getPost,
  getCurrentUser,
  getAllComments,
  getCommentsUser,
  getCommentsAgree,
  getCommentsDisagree,
  getSearch
}

function getNew (ctx, next) {
  get('/api/news', (data) => {
    ctx.news = data
    next()
  })
}

function getAsideNew (ctx, next) {
  get('/api/order-temas', (data) => {
    ctx.ordered = data
    next()
  })
}

function getPost (ctx, next) {
  var id = ctx.path.split('/').pop()
  get('/api/news/' + id, (data) => {
    ctx.post = data
    next()
  })
}

function getCurrentUser (ctx, next) {
  get('/api/currentUser', (data) => {
    ctx.user = data
    next()
  })
}

function getAllComments (ctx, next) {
  get('/api/get-comments', (data) => {
    ctx.comments = data
    next()
  })
}

function getCommentsUser (ctx, next) {
  var user = ctx.pathname.split('/').pop()
  get('/api/get-comment-user/' + user, (data) => {
    ctx.userComments = data
    next()
  })
}

function getCommentsAgree (ctx, next) {
  var id = ctx.path.split('/').pop()
  get(`/api/get-comment-post/${id}?s=agree`, (data) => {
    ctx.commentsAgree = data
    next()
  })
}

function getCommentsDisagree (ctx, next) {
  var id = ctx.path.split('/').pop()
  get(`/api/get-comment-post/${id}?s=disagree`, (data) => {
    ctx.commentsDisagree = data
    next()
  })
}

function getSearch (ctx, next) {
  // Gets the query (if there is one)
  // e.g. s="asturias" --> asturies
  let query = ctx.querystring.split('=').pop()
  // Gets the path: categoria or buscar
  let path = ctx.pathname.split('/')[2]

  let route = path === 'buscar' ? `/api/buscar/?s=${query}`
                                : `/api/categoria/?s=${query}`

  get(route, (data) => {
    ctx.query = query
    ctx.search = data
    next()
  })
}
