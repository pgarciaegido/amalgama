var $ = require('jquery')

var $burguer = $('.Navbar-icon-menu')
var $close = $('.Navbar-icon-close')
var $search = $('.Navbar-search-icon')
var $input = $('.Navbar-search-input')
var $menuMob = $('.Navbar_menu')
var $bg = $('#bg')

// -------OPEN MENU

function openMenu () {
  $menuMob.addClass('active')
  $bg.css('display', 'block')
  $burguer.css('display', 'none')
  $('body').css('overflow-y', 'hidden')
  $close.css('display', 'block')
}

// -------CLOSE MENU

function closeMenu () {
  $menuMob.removeClass('active')
  $bg.css('display', 'none')
  $close.css('display', 'none')
  $('body').css('overflow-y', 'scroll')
  $burguer.css('display', 'block')
}

// ------OPEN SEARCH
var searchOpened = false

function searchInput () {
  if (!searchOpened) {
    $input.addClass('search-active')
    searchOpened = true
  } else {
    $input.removeClass('search-active')
    searchOpened = false
  }
}

// -------EVENT HANDLERS

$burguer.on('click', openMenu)
$close.on('click', closeMenu)
$bg.on('click', closeMenu)
$search.on('click', searchInput)