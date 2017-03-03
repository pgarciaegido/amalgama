import $        from 'jquery'
import header   from '../header/index'
import page     from 'page'
import template from './template'
import queryHandler from '../utils/query_handler'

page('/accede', header, (ctx, next) => {
  require('../header/events')

  let query = ctx.querystring
  // Returns a object with all the queries separated and the error query
  // already converted in a proper message to send to client
  // If there are no queries, returns ''
  const feedback = queryHandler(query)

  let main = document.getElementById('main-container')
  if ($('body').height() < window.innerHeight) {
    $('body').css('overflow', 'hidden')
  }
  $(main).empty().append(template(feedback))
})
