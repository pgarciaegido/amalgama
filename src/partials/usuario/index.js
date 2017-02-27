import $                  from 'jquery'
import header             from '../header/index'
import page               from 'page'
import template           from './template'
import { sortedComments } from './modules'
import comments           from '../utils/comments'
import { getCurrentUser, getCommentsUser } from '../ajax'

page('/app/usuario/:username', getCurrentUser, getCommentsUser, header, (ctx, next) => {
	require('../header/events')

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
		// Changes the comments to be sorted by date
		const buttonDate = $('#usuario-sort-date')
		buttonDate.on('click', (e) => {
		  clickSort(e, userComments)
			buttonDate.addClass('sort-comments-active')
			buttonLikes.removeClass('sort-comments-active')
		})

		// Changes the comments to be sorted by likes
		const buttonLikes = $('#usuario-sort-likes')
		buttonLikes.on('click', (e) => {
		  clickSort(e, userCommentsLikes)
			buttonLikes.addClass('sort-comments-active')
			buttonDate.removeClass('sort-comments-active')
		})
	})
})

function clickSort (e, userCom) {
	e.preventDefault()
	let comContainer = document.getElementById('usuario-comments-container')
	$(comContainer).empty().append(sortedComments(userCom))
}
