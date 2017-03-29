import $ from 'jquery'
import yo from 'yo-yo'

// AJAX calls to vote in the background without refreshing with a form!

module.exports = {
  ajaxVotePosts,
  ajaxVoteComment
}

// VOTE POST FRONT HANDLER =====================================================
function ajaxVotePosts () {
  // Thumbup and thumbup-liked buttons
  const thumbupLiked   = yo`<span id="thumbup-liked" class="Noticia_comentarios-comentarios-agree-header-votes-icon-liked"></span>`
  const thumbup        = yo`<span id="thumbup" class="Noticia_comentarios-comentarios-agree-header-votes-icon"></span>`
  // Thumbdown and thumbdown-liked buttons
  const thumbdownLiked = yo`<span id="thumbdown-liked" class="Noticia_comentarios-comentarios-disagree-header-votes-icon-liked"></span>`
  const thumbdown      = yo`<span id="thumbdown" class="Noticia_comentarios-comentarios-disagree-header-votes-icon"></span>`
  // Loader
  const loader         = yo`<span id="like-post-loader"></span>`

  let id = $(this).attr('id')
  let uri, $hide, $show, $container, operation

  // Depending on clicked button, creates logics
  if (id === 'thumbup'){
    uri = 'upvote'
    $hide = $(this)
    $show = thumbupLiked
    $container = $('#agree-votes-container')
    operation = 1
  }

  else if (id === 'thumbup-liked'){
    uri = 'unupvote'
    $hide = $(this)
    $show = thumbup
    $container = $('#agree-votes-container')
    operation = -1
  }

  else if (id === 'thumbdown'){
    uri = 'downvote'
    $hide = $(this)
    $show = thumbdownLiked
    $container = $('#disagree-votes-container')
    operation = 1
  }

  else if (id === 'thumbdown-liked'){
    uri = 'undownvote'
    $hide = $(this)
    $show = thumbdown
    $container = $('#disagree-votes-container')
    operation = -1
  }

  // Includes loader and gets counter number
  $hide.remove()
  $container.append(loader)
  let $counter = $container.find('.post-counter')
  let $feedback = $container.parent().next()

  // AJAX call: Removes loader, appends new icon and sums or substracts 1 to counter and sends fb message
  // data sends the number of likes before updating
  $.post(`/api/${uri}`, (data) => {
    // If there is Error on the reply
    if (data.indexOf('Error') !== -1)
      return ajaxErrorResponse(loader, $container, $hide, $feedback)

    $(loader).remove()
    $container.append($show)
    $counter.html(Number(data) + Number(operation))
    $feedback.addClass('success-like')
    setTimeout(() => { $feedback.removeClass('success-like') }, 3000)
  })
  //handles error. Logs error and reset previus icon. Insert fb message and then removes it
  .fail((response) => {
    console.log(response.responseText)
    return ajaxErrorResponse(loader, $container, $hide, $feedback)
  })
}


// Handles replies on ajax error
function ajaxErrorResponse(loader, $container, $hide, $feedback){
  $(loader).remove()
  $container.append($hide)
  $feedback.addClass('error-like')
  setTimeout(() => { $feedback.removeClass('error-like') }, 3000)
}

// VOTE COMMENT HANDLER ========================================================

function ajaxVoteComment () {

  let id = $(this).attr('id')
  let $container = $(this).parent()
  let $counter = $container.find('#comments-like-counter')
  let commentId = $(this).attr('data-comment')

  const voted   = yo`<span id="new-card-liked" data-comment="${commentId}" class="Noticias_comentarios_card-feedback-like-icon-liked"></span>`
  const unVoted = yo`<span id="new-card" data-comment="${commentId}" class="Noticias_comentarios_card-feedback-like-icon"></span>`

  let operation, $hide, $show

  if (id === 'new-card') {
    $hide = $(this)
    $show = voted
    operation = 1

  } else if (id === 'new-card-liked') {
    $hide = $(this)
    $show = unVoted
    operation = -1
  }

  $hide.remove()

  $.post(`/api/comment-like/${commentId}`, (data) => {
    // If there is Error on the reply
    // if (data.indexOf('Error') !== -1)
    //   return ajaxErrorResponse(loader, $container, $hide, $feedback)
    console.log(data)
    $container.prepend($show)
    $counter.html(Number(data) + Number(operation))
  })
  //handles error. Logs error and reset previus icon. Insert fb message and then removes it
  .fail((response) => {
    console.log(response.responseText)
  })
}
