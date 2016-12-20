var $ = require('jquery')

var $burguer = $('.Navbar-icon-menu')
var $close = $('.Navbar-icon-close')
var $menuMob = $('.Navbar_menu')
var $bg = $('#bg')

/*-----OPEN MENU----*/

function openMenu() {
	$menuMob.addClass('active')
	$bg.css('display', 'block')
	$burguer.css('display', 'none')
	$close.css('display', 'block')
}

/*-----CLOSE MENU-----*/

function closeMenu() {
	$menuMob.removeClass('active')
	$bg.css('display', 'none')
	$close.css('display', 'none')
	$burguer.css('display', 'block')
}	

/*-----EVENT HANDLERS----*/

$burguer.on('click', openMenu)
$close.on('click', closeMenu)
$bg.on('click', closeMenu)

window.onresize = function (ev){
	if(window.innerWidth > 700){
		$close.css('display', 'none')
		$burguer.css('display', 'none')
	}
	else{
		$burguer.css('display', 'block')
	}
}