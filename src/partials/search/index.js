import $          from 'jquery'
import header     from '../header/index'
import page       from 'page'
import template   from './template'
import aside      from '../aside'

import { getAsideNew, getPost, getCurrentUser, getSearch } from '../ajax'
//
// // getAsideNew gets the list of all posts for the aside list
// // getCurrentUser gets the logged in user
// // header renders header
page('/app/buscar/', getSearch, getAsideNew, getCurrentUser, header, search, aside)
page('/app/categoria/', getSearch, getAsideNew, getCurrentUser, header, search, aside)


// It can be used to display normal search and tags
function search (ctx, next) {
  require('../header/events')

  let main = document.getElementById('main-container')
  let posts = ctx.search
  let query = ctx.query
  $(main).empty().append(template.template(posts, query))
  next()
}
