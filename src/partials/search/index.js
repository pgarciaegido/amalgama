import $          from 'jquery'
import header     from '../header/index'
import page       from 'page'
// import template   from './template'
import aside      from '../aside'

import { getAsideNew, getPost, getCurrentUser, getSearch } from '../ajax'
//
// // getAsideNew gets the list of all posts for the aside list
// // getCurrentUser gets the logged in user
// // header renders header
page('/app/buscar/', getSearch, getAsideNew, getCurrentUser, header, (ctx, next) => {
  require('../header/events')

  // let main = document.getElementById('main-container')
  // The arguments are the news array, and the user object
  // $(main).empty().append(template(ctx.post, ctx.user, ctx.commentsAgree, ctx.commentsDisagree))
  console.log('ma meeen')
  next()
}, aside)
