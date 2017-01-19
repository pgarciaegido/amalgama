import $           from 'jquery'
import { comCard } from './modules'
import votesLiked  from './votesLiked'
import moment      from 'moment'
import func        from './comments_events_functions'

// ////////////////////////// Event Handlers

// ------ Creates input
$(document).on('click', '#comentar-agree', func.commentAgree)
$(document).on('click', '#comentar-disagree', func.commentDisagree)

// ----- Inside input, cancels and closes the input
$(document).on('click', '#cancelar-comments', func.cancelarComments)

// ------ Inside input, sends and close
$(document).on('click', '#enviar-comments', func.enviarComments)



// ----------- Like comments
$(document).on('click', '#new-card', func.likeComment)
$(document).on('click', '#new-card-liked', func.likeComment)

// // ----- Open and close menu when mobile
$(document).on('click', '#arrow-agree', func.commentsMobile)
$(document).on('click', '#title-agree', func.commentsMobile)
$(document).on('click', '#arrow-disagree', func.commentsMobile)
$(document).on('click', '#title-disagree', func.commentsMobile)
