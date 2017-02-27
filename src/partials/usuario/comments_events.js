import $ from 'jquery'
import c from './index'
import { sortedComments } from './modules'

// Changes the comments to be sorted by date
const buttonDate = $('#usuario-sort-date')
buttonDate.on('click', (e) => {
  const c = require('./index')
  clickSort(e, c.userComments)

  buttonDate.addClass('sort-comments-active')
  buttonLikes.removeClass('sort-comments-active')
})

// Changes the comments to be sorted by likes
const buttonLikes = $('#usuario-sort-likes')
buttonLikes.on('click', (e) => {
  const c = require('./index')
  clickSort(e, c.userCommentsLikes)

  buttonLikes.addClass('sort-comments-active')
  buttonDate.removeClass('sort-comments-active')
})


function clickSort (e, userCom) {
	e.preventDefault()
	let comContainer = document.getElementById('usuario-comments-container')
	$(comContainer).empty().append(sortedComments(userCom))
}
