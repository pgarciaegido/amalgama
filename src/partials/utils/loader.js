import $ from 'jquery'

const loader = $('.loader-container')

module.exports = {
  showLoader,
  hideLoader
}

function showLoader () {
  loader.removeClass('loader-hidden')
}

function hideLoader () {
  loader.addClass('loader-hidden')
}
