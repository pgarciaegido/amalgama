var $ = require('jquery')
var yo = require('yo-yo')

module.exports = function (ctx, next) {
  var container = $('#header-container')
  container.append(el)
  next()
}

var el = yo`<div>
<nav class="Navbar">
  <img src="/img/menu.svg" alt="menu" class="Navbar-icon-menu" />
  <img src="/img/cancel-circle.svg" alt="close" class="Navbar-icon-close" />
  <a href="/"><img class="Navbar-logo" src="/img/logo.svg" alt="logo"></a>
  <ul class="Navbar-menu">
    <li class="Navbar-menu-item"><a href="/">HOME</a></li>
    <li class="Navbar-menu-item"><a href="#">ESPAÑA</a></li>
    <li class="Navbar-menu-item"><a href="#">INTERNACIONAL</a></li>
    <li class="Navbar-menu-item"><a href="#">ECONOMÍA</a></li>
    <li class="Navbar-menu-item"><a href="./accede">ACCEDE</a></li>
    <li class="Navbar-menu-item"><a href="./registrate">REGISTRATE</a></li>
  </ul>
  <div class="Navbar-search">
    <input type="search" class="Navbar-search-input">
    <img src="/img/search.svg" alt="search" class="Navbar-search-icon">
  </div>
</nav>
<nav class="Navbar_menu">
  <ul class="Navbar_menu-menu">
    <li class="Navbar_menu-menu-item"><a href="/">HOME</a></li>
    <li class="Navbar_menu-menu-item"><a href="#">ESPAÑA</a></li>
    <li class="Navbar_menu-menu-item"><a href="#">INTERNACIONAL</a></li>
    <li class="Navbar_menu-menu-item"><a href="#">ECONOMÍA</a></li>
    <li class="Navbar_menu-menu-item"><a href="./accede">ACCEDE</a></li>
    <li class="Navbar_menu-menu-item"><a href="./registrate">REGISTRATE</a></li>
  </ul>
</nav>
<div id="bg"></div>
</div>`
