import $                  from 'jquery'
import header             from '../header/index'
import page               from 'page'
import template           from './template'
import { getCurrentUser } from '../ajax'

page('/app/usuario/:username', getCurrentUser, header, (ctx, next) => {
	let user = ctx.user
	require('../header/events')
  let main = document.getElementById('main-container')
  $(main).empty().append(template(user))
})
