import $                  from 'jquery'
import header             from '../header/index'
import page               from 'page'
import template           from './template'
import comments           from '../utils/comments'
import { getCurrentUser, getCommentsUser } from '../ajax'

page('/app/usuario/:username', getCurrentUser, getCommentsUser, header, (ctx, next) => {
	require('../header/events')

	const user = ctx.user
	const userComments = ctx.userComments
	const userCommentsLikes = []
	// Sorts by likes
	comments.sortByLikes(userComments, userCommentsLikes)

	// First, it will display comments sorted by date (DESC), as it comes from db
  let main = document.getElementById('main-container')
  $(main).empty().append(template(user, userComments))

	// Event listeners
	$(document).ready(() => {
		// Changes the comments to be sorted by date
		$(document).on('click', '#usuario-sort-date', (e) => {
		  clickSort(e, user, userComments)
		})

		// Changes the comments to be sorted by likes
		$(document).on('click', '#usuario-sort-likes', (e) => {
		  clickSort(e, user, userCommentsLikes)
		})
	})
})

function clickSort (e, user, userCom) {
	e.preventDefault()
	let main = document.getElementById('main-container')
	$(main).empty().append(template(user, userCom))
}
