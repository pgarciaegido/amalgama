import $          from 'jquery'
import page       from 'page'
import template   from './template'
import header     from '../header/index'
import articles   from '../feed/feed_events'
import percentage from '../votes_bar/get_percentage'
import aside      from '../aside'

import { getNew, getAsideNew, getCurrentUser } from '../ajax'

page('/', (ctx, next) => {
  window.location.href = '/app'
})

// Homepage when not logged in
page('/invitado', header, getNew, getAsideNew, (ctx, next) => {
  loadHomepage(ctx)
  next()
}, aside)

// Homepage when logged in
page('/app', getCurrentUser, header, getNew, getAsideNew, (ctx, next) => {
  loadHomepage(ctx)
  next()
}, aside)

function loadHomepage (ctx) {
  $(document).ready(() => {
    require('../header/events')
    require('../feed/feed_events')
    articles()
    percentage()
  })
  let main = document.getElementById('main-container')

  // we get the latest so we fill the latest" section with it
  let latest = ctx.news.length - 1
  let latestNew = ctx.news[latest]
  $(main).empty().append(template(ctx.news, latest))

  // Gets the element poped on template back to array, so we can use them all on the aside
  ctx.news.unshift(latestNew)
}
