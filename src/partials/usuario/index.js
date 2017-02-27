import $                  from 'jquery'
import header             from '../header/index'
import page               from 'page'
import template           from './template'
import { sortedComments } from './modules'
import comments           from '../utils/comments'
import { getCurrentUser, getCommentsUser } from '../ajax'

page('/app/usuario/:username', getCurrentUser, getCommentsUser, header, (ctx, next) => {

	const user = ctx.user
	const userComments = ctx.userComments
	let userCommentsLikes = []
	// Sorts by likes
	comments.sortByLikes(userComments, userCommentsLikes)

	// First, it will display comments sorted by date (DESC), as it comes from db
  const main = document.getElementById('main-container')
  $(main).empty().append(template(user, userComments))

	// Event listeners
	$(document).ready(() => {
		// Header events
		require('../header/events')
		// Sorting comments events
		require('./comments_events')
	})

	module.exports = {
		userComments,
		userCommentsLikes
	}
})
