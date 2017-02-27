import $           from 'jquery'
import { comCard } from './modules'
import votesLiked  from './votesLiked'
import moment      from 'moment'
import func        from './comments_events_functions'
import v           from './comments_events_vars'
import sort        from './comments_events_sort'

// ////////////////////////// Event Handlers

// ------ Creates input
$(document).on('click', '#comentar-agree', func.commentAgree)
$(document).on('click', '#comentar-disagree', func.commentDisagree)

// ------ Hides input
$(document).on('click', '#close-commentagree', func.commentCloseAgree)
$(document).on('click', '#close-commentdisagree', func.commentCloseDisagree)

$(document).on('click', '#comentar-closeagree', func.commentCloseAgree)
$(document).on('click', '#comentar-closedisagree', func.commentCloseDisagree)

// ------ Sort comments
v.buttonDateAgree.on('click', sort)
v.buttonLikesAgree.on('click', sort)
v.buttonDateDisagree.on('click', sort)
v.buttonLikesDisagree.on('click', sort)

// // ----- Open and close menu when mobile
$(document).on('click', '#arrow-agree', func.commentsMobile)
$(document).on('click', '#title-agree', func.commentsMobile)
$(document).on('click', '#arrow-disagree', func.commentsMobile)
$(document).on('click', '#title-disagree', func.commentsMobile)
