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
  <span class="Navbar-icon-menu" id="header-burguer"></span>
  <span class="Navbar-icon-close" id="header-close"></span>
  <a href="/app" id="header-logo-anchor"><div class="Navbar-logo" id="header-logo"></div></a>
  <div class="Navbar-search">
    ${headerDesktop(user)}
    <input type="search" class="Navbar-search-input" id="header-search-input">
    <span class="Navbar-search-icon" id="header-search"></span>
  </div>
</nav>
<nav class="Navbar_menu_mob" id="header-menu-mobile">
  <ul class="Navbar_menu_mob-menu">
    ${headerMobile(user)}
  </ul>
</nav>
<div id="bg"></div>
</div>`
}

function headerDesktop (user) {
  if (document.URL.indexOf('/app') == -1) {
    return yo`<div class="Navbar-menu" id="header-menu-desktop">
                <a href="./accede" class="Navbar-menu-item">Accede</a>
                <a href="./registrate" class="Navbar-menu-item">Registrate</a>
              </div>`
  } else {
    return yo`<div class="Navbar-menu" id="header-menu-desktop">
                <a href="/app/usuario/${user.username}" class="Navbar-menu-item">Mi perfil</a>
                <a href="/app/logout" class="Navbar-menu-item">Logout</a>
              </div>`
  }
}

function headerMobile (user) {
  if (document.URL.indexOf('/app') == -1) {
    return yo`<div>
                <a href="./accede" class="Navbar_menu_mob-menu-item">Accede</a>
                <a href="./registrate" class="Navbar_menu_mob-menu-item">Registrate</a>
              </div>`
  } else {
    return yo`<div>
                <a href="/app/usuario/${user.username}" class="Navbar_menu_mob-menu-item">Mi perfil</a>
                <a href="/app/logout" class="Navbar_menu_mob-menu-item">Logout</a>
              </div>`
  }
}
