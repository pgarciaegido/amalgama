import $  from 'jquery'
import yo from 'yo-yo'

module.exports = function header (ctx, next) {
  let user = ctx.user
  let container = $('#header-container')
  $(container).empty().append(headerTemplate(user))
  next()
}

function headerTemplate (user) {
  return yo`<div>
<nav class="Navbar">
  <span class="Navbar-icon-menu"></span>
  <span class="Navbar-icon-close"></span>
  <a href="/"><div class="Navbar-logo"></div></a>
  <ul class="Navbar-menu">
    <a href="/" class="Navbar-menu-item"><li>HOME</li></a>
    <a href="#" class="Navbar-menu-item"><li>ESPAÑA</li></a>
    <a href="#" class="Navbar-menu-item"><li>INTERNACIONAL</li></a>
    <a href="#" class="Navbar-menu-item"><li>ECONOMÍA</li></a>
    ${headerDesktop(user)}
  </ul>
  <div class="Navbar-search">
    <input type="search" class="Navbar-search-input">
    <span class="Navbar-search-icon"></span>
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
  if (document.URL.indexOf('/app') == -1) {
    return yo`<div>
                <a href="./accede" class="Navbar-menu"><li>ACCEDE</li></a>
                <a href="./registrate" class="Navbar-menu"><li>REGISTRATE</li></a>
              </div>`
  } else {
    return yo`<a href="/app/usuario/${user.username}" class="Navbar-menu-item"><li>MI PERFIL</li></a>`
  }
}

function headerMobile (user) {
  if (document.URL.indexOf('/app') == -1) {
    return yo`<div>
                <a href="./accede"><li class="Navbar_menu-menu-item">ACCEDE</li></a>
                <a href="./registrate"><li class="Navbar_menu-menu-item">REGISTRATE</li></a>
              </div>`
  } else {
    return yo`<a class="Navbar_menu-menu-item" href="/app/usuario/${user.username}"><li>MI PERFIL</li></a>`
  }
}
