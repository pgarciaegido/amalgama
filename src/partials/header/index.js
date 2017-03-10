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
  <div class="Navbar-search">
    ${headerDesktop(user)}
    <input type="search" class="Navbar-search-input">
    <span class="Navbar-search-icon"></span>
  </div>
</nav>
<nav class="Navbar_menu">
  <ul class="Navbar_menu-menu">
    ${headerMobile(user)}
  </ul>
</nav>
<div id="bg"></div>
</div>`
}

function headerDesktop (user) {
  if (document.URL.indexOf('/app') == -1) {
    return yo`<div class="Navbar-menu">
                <a href="./accede" class="Navbar-menu-item">Accede</a>
                <a href="./registrate" class="Navbar-menu-item">Registrate</a>
              </div>`
  } else {
    return yo`<div class="Navbar-menu">
                <a href="/app/usuario/${user.username}" class="Navbar-menu-item">Mi perfil</a>
                <a href="/app/logout" class="Navbar-menu-item">Logout</a>
              </div>`
  }
}

function headerMobile (user) {
  if (document.URL.indexOf('/app') == -1) {
    return yo`<div>
                <a href="./accede" class="Navbar_menu-menu-item">Accede</a>
                <a href="./registrate" class="Navbar_menu-menu-item">Registrate</a>
              </div>`
  } else {
    return yo`<div>
                <a href="/app/usuario/${user.username}" class="Navbar_menu-menu-item">Mi perfil</a>
                <a href="/app/logout" class="Navbar_menu-menu-item">Logout</a>
              </div>`
  }
}
