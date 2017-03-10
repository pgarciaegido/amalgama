import $ from 'jquery'

const $burguer = $('.Navbar-icon-menu')
const $close = $('.Navbar-icon-close')
const $search = $('.Navbar-search-icon')
const $input = $('.Navbar-search-input')
const $menuMob = $('.Navbar_menu')
const $bg = $('#bg')

// -------OPEN MENU

function openMenu () {
  $menuMob.addClass('active')
  $bg.css('display', 'block')
  $burguer.css('display', 'none')
  $('body').css('overflow-y', 'hidden')
  $close.css('display', 'inline-block')
}

// -------CLOSE MENU

function closeMenu () {
  $menuMob.removeClass('active')
  $bg.css('display', 'none')
  $close.css('display', 'none')
  $('body').css('overflow-y', 'scroll')
  $burguer.css('display', 'inline-block')
}

// ------OPEN SEARCH
let searchOpened = false

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
