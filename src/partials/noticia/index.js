import $          from 'jquery'
import header     from '../header/index'
import page       from 'page'
import template   from './template'
import aside      from '../aside'
import percentage from '../votes_bar/get_percentage'

import { getNew, getPost, getCurrentUser } from '../ajax'

page('/app/noticia/:id', getNew, getCurrentUser, header, getPost, (ctx, next) => {
  require('../header/events')
  require('./comments_events')

  $(document).ready(function () {
    percentage()
  })

  // coger id de la url para pedir ese post al json
  let id = document.URL.split('/').pop()
  window.scrollTo(0, 0)

  let main = document.getElementById('main-container')
  // The arguments are the news array, and the user object
  $(main).empty().append(template(ctx.post, ctx.user))
  next()
}, aside)
