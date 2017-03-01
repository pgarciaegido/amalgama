import $        from 'jquery'
import header   from '../header/index'
import page     from 'page'
import template from './template'
import { errorMessage } from '../utils/error_messages'

page('/registrate', header, (ctx, next) => {
  require('../header/events')

  const query = ctx.querystring
  const err = errorMessage(query)

  if ($('body').height() < window.innerHeight) {
    $('body').css('overflow', 'hidden')
  }

  const main = document.getElementById('main-container')
  $(main).empty().append(template(err))
})
