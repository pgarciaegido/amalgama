import $        from 'jquery'
import header   from '../header/index'
import page     from 'page'
import template from './template'

page('/app/usuario/pegido/editar', header, (ctx, next) => {
  require('../header/events')
  let main = document.getElementById('main-container')
  $(main).empty().append(template)
})
