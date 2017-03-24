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
  const post = ctx.post
  const user = ctx.user
  const commentsAgree = ctx.commentsAgree
  const commentsDisagree = ctx.commentsDisagree

  let commentsAgreeLikes = []
  let commentsDisagreeLikes = []

  comments.sortByLikes(commentsAgree, commentsAgreeLikes)
  comments.sortByLikes(commentsDisagree, commentsDisagreeLikes)

  $(document).ready(function () {
    percentage()
    require('../header/events')
    require('./comments_events')
  })

  // coger id de la url para pedir ese post al json
  let id = document.URL.split('/').pop()
  window.scrollTo(0, 0)

  let main = document.getElementById('main-container')
  // The arguments are the news array, and the user object
  $(main).empty().append(template(post, user, commentsAgree, commentsDisagree))

  module.exports = {
    commentsAgree,
    commentsDisagree,
    commentsAgreeLikes,
    commentsDisagreeLikes,
    user
  }

  next()
}, aside)
