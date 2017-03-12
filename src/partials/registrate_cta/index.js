import yo from 'yo-yo'

module.exports = function cta () {
  if (document.URL.indexOf('invitado') > 0) {
    return yo`<div class="Register_cta">
      <a href="/accede" class="Register_cta-accede">Accede</a>
      <h2 class="Register_cta-participa">¡Participa!</h2>
      <a href="/registrate" class="Register_cta-registrate">Regístrate</a>
    </div>`
  }
}
