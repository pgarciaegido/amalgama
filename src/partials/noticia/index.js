import $          from 'jquery'
import header     from '../header/index'
import page       from 'page'
import template   from './template'
import aside      from '../aside'
import percentage from '../votes_bar/get_percentage'

import { getNew, getPost, getCurrentUser, getCommentsAgree, getCommentsDisagree } from '../ajax'

// getNew gets the list of all posts for the aside list
// getCurrentUser gets the logged in user
// getCommentsAgree gets the lists of comments agreeing. Same for disagree
// header renders header
// getPosts gets the post we are about to render
page('/app/noticia/:id', getNew, getCurrentUser, getCommentsAgree, getCommentsDisagree, header, getPost, (ctx, next) => {
  require('../header/events')
  require('./comments_events')

  $(document).ready(function () {
    percentage()
  })
  console.log(ctx.commentsAgree, ctx.commentsDisagree)
  // coger id de la url para pedir ese post al json
  let id = document.URL.split('/').pop()
  window.scrollTo(0, 0)

  let main = document.getElementById('main-container')
  // The arguments are the news array, and the user object
  $(main).empty().append(template(ctx.post, ctx.user, ctx.commentsAgree, ctx.commentsDisagree))
  next()
}, aside)
