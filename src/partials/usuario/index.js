import $                  from 'jquery'
import header             from '../header/index'
import page               from 'page'
import template           from './template'
import { getCurrentUser, getAllComments } from '../ajax'

page('/app/usuario/:username', getCurrentUser, getAllComments, header, (ctx, next) => {
	let user = ctx.user
	let userComments = []

	// Loops throu all the comments, those who are made by logged user get selected
	for(let i in ctx.comments){
		if (ctx.comments[i].userid === ctx.user._id){
			userComments.push(ctx.comments[i])
		}
	}

	require('../header/events')
  let main = document.getElementById('main-container')
	console.log(userComments)
  $(main).empty().append(template(user, userComments))
})
