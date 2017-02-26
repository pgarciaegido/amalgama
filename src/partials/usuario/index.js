import $                  from 'jquery'
import header             from '../header/index'
import page               from 'page'
import template           from './template'
import { getCurrentUser, getCommentsUser, getCommentsUserByLikes } from '../ajax'

page('/app/usuario/:username', getCurrentUser, getCommentsUser, header, (ctx, next) => {
	let user = ctx.user
	let userComments = ctx.userComments

	require('../header/events')
  let main = document.getElementById('main-container')
  $(main).empty().append(template(user, userComments))
})
