var yo = require('yo-yo')

module.exports = function () {
	if(document.URL.indexOf('invitado') > 0){
	  return yo`<div class="Register_cta">
	    <button class="Register_cta-accede">Accede</button>
	    <h2 class="Register_cta-participa">¡Participa!</h2>
	    <button class="Register_cta-registrate">Regístrate</button>
	  </div>`
	}
}
