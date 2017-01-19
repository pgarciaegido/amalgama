import $        from 'jquery'
import header   from '../header/index'
import page     from 'page'
import template from './template'

page('/registrate', header, (ctx, next) => {
  require('../header/events')
  let main = document.getElementById('main-container')
  if ($('body').height() < window.innerHeight) {
    $('body').css('overflow', 'hidden')
  }
  $(main).empty().append(template)
})
