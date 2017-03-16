import $ from 'jquery'

const loader = $('.loader-container')

module.exports = {
  hideLoader
}

function hideLoader () {
  loader.addClass('loader-hidden')
}
