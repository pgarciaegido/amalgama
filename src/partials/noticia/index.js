import $          from 'jquery'
import header     from '../header/index'
import page       from 'page'
import template   from './template'
import aside      from '../aside'
import percentage from '../votes_bar/get_percentage'
import comments   from '../utils/comments'
import {sortComments} from './modules'

import { getAsideNew, getPost, getCurrentUser, getCommentsAgree, getCommentsDisagree } from '../ajax'

// getAsideNew gets the list of all posts for the aside list
// getCurrentUser gets the logged in user
// getCommentsAgree gets the lists of comments agreeing. Same for disagree
// header renders header
// getPosts gets the post we are about to render
page('/app/noticia/:id', getAsideNew, getCurrentUser, getCommentsAgree, getCommentsDisagree, header, getPost, (ctx, next) => {
  require('../header/events')
  require('./comments_events')

  const user = ctx.user
  const commentsAgree = ctx.commentsAgree
  const commentsDisagree = ctx.commentsDisagree

  let commentsAgreeLikes = []
  let commentsDisagreeLikes = []

  comments.sortByLikes(commentsAgree, commentsAgreeLikes)
  comments.sortByLikes(commentsDisagree, commentsDisagreeLikes)

  $(document).ready(function () {
    percentage()

    let buttonDateAgree = $('#noticia-sort-new-agree')
    let buttonLikesAgree = $('#noticia-sort-likes-agree')
    let buttonDateDisagree = $('#noticia-sort-new-disagree')
    let buttonLikesDisagree = $('#noticia-sort-likes-disagree')
    let comContainer

    buttonDateAgree.on('click',(e) => {
      comContainer = $('#noticia-comments-container-agree')
      clickSort(e, user, commentsAgree, comContainer)
			buttonDateAgree.addClass('sort-comments-active')
			buttonLikesAgree.removeClass('sort-comments-active')
    })

    buttonLikesAgree.on('click', (e) => {
      comContainer = $('#noticia-comments-container-agree')
      clickSort(e, user, commentsAgreeLikes, comContainer)
			buttonDateAgree.removeClass('sort-comments-active')
			buttonLikesAgree.addClass('sort-comments-active')
    })

    buttonDateDisagree.on('click',(e) => {
      comContainer = $('#noticia-comments-container-disagree')
      clickSort(e, user, commentsDisagree, comContainer)
			buttonDateDisagree.addClass('sort-comments-active')
			buttonLikesDisagree.removeClass('sort-comments-active')
    })

    buttonLikesDisagree.on('click', (e) => {
      comContainer = $('#noticia-comments-container-disagree')
      clickSort(e, user, commentsDisagreeLikes, comContainer)
			buttonDateDisagree.removeClass('sort-comments-active')
			buttonLikesDisagree.addClass('sort-comments-active')
    })
  })

  // coger id de la url para pedir ese post al json
  let id = document.URL.split('/').pop()
  window.scrollTo(0, 0)

  let main = document.getElementById('main-container')
  // The arguments are the news array, and the user object
  $(main).empty().append(template(ctx.post, ctx.user, ctx.commentsAgree, ctx.commentsDisagree))
  next()
}, aside)

function clickSort (e, user, userCom, container) {
	e.preventDefault()
	container.empty().append(sortComments(user, userCom))
}
