import $           from 'jquery'
import { comCard } from './modules'
import votesLiked  from './votesLiked'
import moment      from 'moment'
import func        from './comments_events_functions'

// ////////////////////////// Event Handlers

// ------ Creates input
$(document).on('click', '#comentar-agree', func.commentAgree)
$(document).on('click', '#comentar-disagree', func.commentDisagree)

// ------ Hides input
$(document).on('click', '#close-commentagree', func.commentCloseAgree)
$(document).on('click', '#close-commentdisagree', func.commentCloseDisagree)

// ----------- Like comments
$(document).on('click', '#new-card', func.likeComment)
$(document).on('click', '#new-card-liked', func.likeComment)

// // ----- Open and close menu when mobile
$(document).on('click', '#arrow-agree', func.commentsMobile)
$(document).on('click', '#title-agree', func.commentsMobile)
$(document).on('click', '#arrow-disagree', func.commentsMobile)
$(document).on('click', '#title-disagree', func.commentsMobile)
