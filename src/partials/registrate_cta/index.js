import yo from 'yo-yo'

module.exports = function cta () {
  if (document.URL.indexOf('invitado') > 0) {
    return yo`<div class="Register_cta">
      <button class="Register_cta-accede"><a href="/accede">Accede</a></button>
      <h2 class="Register_cta-participa">¡Participa!</h2>
      <button class="Register_cta-registrate"><a href="/registrate">Regístrate</a></button>
    </div>`
  }
}
