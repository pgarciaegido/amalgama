import $        from 'jquery'
import header   from '../header/index'
import page     from 'page'
import template from './template'
import { errorMessage } from '../utils/error_messages'
import queryHandler from '../utils/query_handler'

page('/registrate', header, (ctx, next) => {
  require('../header/events')

  let query = ctx.querystring
  // Returns a object with all the queries separated and the error query
  // already converted in a proper message to send to client
  // If there are no queries, returns ''
  const feedback = queryHandler(query)

  console.log(feedback)

  if ($('body').height() < window.innerHeight) {
    $('body').css('overflow', 'hidden')
  }

  const main = document.getElementById('main-container')
  $(main).empty().append(template(feedback))
})
