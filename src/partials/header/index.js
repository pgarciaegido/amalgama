var $ = require('jquery')
var yo = require('yo-yo')

module.exports = function header (ctx, next) {
  var user = ctx.user
  var container = $('#header-container')
  $(container).empty().append(headerTemplate(user))
  next()
}

function headerTemplate (user) {
  return yo`<div>
<nav class="Navbar">
  <img src="/img/menu.svg" alt="menu" class="Navbar-icon-menu" />
  <img src="/img/cancel-circle.svg" alt="close" class="Navbar-icon-close" />
  <a href="/"><img class="Navbar-logo" src="/img/logo.svg" alt="logo"></a>
  <ul class="Navbar-menu">
    <a href="/" class="Navbar-menu-item"><li>HOME</li></a>
    <a href="#" class="Navbar-menu-item"><li>ESPAÑA</li></a>
    <a href="#" class="Navbar-menu-item"><li>INTERNACIONAL</li></a>
    <a href="#" class="Navbar-menu-item"><li>ECONOMÍA</li></a>
    ${headerDesktop(user)}
  </ul>
  <div class="Navbar-search">
    <input type="search" class="Navbar-search-input">
    <img src="/img/search.svg" alt="search" class="Navbar-search-icon">
  </div>
</nav>
<nav class="Navbar_menu">
  <ul class="Navbar_menu-menu">
    <a href="/" class="Navbar_menu-menu-item"><li>HOME</li></a>
    <a href="#" class="Navbar_menu-menu-item"><li>ESPAÑA</li></a>
    <a href="#" class="Navbar_menu-menu-item"><li>INTERNACIONAL</li></a>
    <a href="#" class="Navbar_menu-menu-item"><li>ECONOMÍA</li></a>
    ${headerMobile(user)}
  </ul>
</nav>
<div id="bg"></div>
</div>`
}

function headerDesktop (user) {
  if (document.URL.indexOf('invitado') == -1) {
    return yo`<a href="/app/usuario/${user.username}" class="Navbar-menu-item"><li>MI PERFIL</li></a>`
  } else {
    return yo`<div>
                <a href="./accede" class="Navbar-menu"><li>ACCEDE</li></a>
                <a href="./registrate" class="Navbar-menu"><li>REGISTRATE</li></a>
              </div>`
  }
}

function headerMobile (user) {
  if (document.URL.indexOf('invitado') == -1) {
    return yo`<a class="Navbar_menu-menu-item" href="/app/usuario/${user.username}"><li>MI PERFIL</li></a>`
  } else {
    return yo`<div>
                <a href="./accede"><li class="Navbar_menu-menu-item">ACCEDE</li></a>
                <a href="./registrate"><li class="Navbar_menu-menu-item">REGISTRATE</li></a>
              </div>`
  }
}

