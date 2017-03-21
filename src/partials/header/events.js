import $ from 'jquery'

// When assinging DOM elements to variables causes error when those elements
// need to be recreated, like in this case. So getting directly the jQuery
// object is a workaround for that.

// -------OPEN MENU

function openMenu () {
  $('#header-menu-mobile').addClass('active')
  $('#bg').css('display', 'block')
  $('#header-burguer').css('display', 'none')
  $('body').css('overflow-y', 'hidden')
  $('#header-close').css('display', 'inline-block')
}

// -------CLOSE MENU

function closeMenu () {
  $('#header-menu-mobile').removeClass('active')
  $('#bg').css('display', 'none')
  $('#header-close').css('display', 'none')
  $('body').css('overflow-y', 'scroll')
  $('#header-burguer').css('display', 'inline-block')
}

// ------OPEN SEARCH
let searchOpened = false

function searchInput () {
  if (!searchOpened) {
    $('#header-search-input').addClass('search-active')
    $('#header-menu-desktop').addClass('menu-search-active')
    $('#header-logo').addClass('logo-search-active')
    $('#header-logo-anchor').addClass('logo-search-active')
    searchOpened = true
  } else {
    $('#header-search-input').removeClass('search-active')
    $('#header-menu-desktop').removeClass('menu-search-active')
    $('#header-logo').removeClass('logo-search-active')
    $('#header-logo-anchor').removeClass('logo-search-active')
    searchOpened = false
  }
}

// -------SEARCH
function search (e) {
  if (e.which === 13) {
    let search = $('#header-search-input').val()
    window.location.href = `/app/buscar?${search}`
  }
}

// -------EVENT HANDLERS

$(document).on('click', '#header-burguer', openMenu)
$(document).on('click', '#header-close', closeMenu)
$(document).on('click', '#bg', closeMenu)
$(document).on('click', '#header-search', searchInput)
$(document).on('keydown', '#header-search-input', search)
