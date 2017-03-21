import $ from 'jquery'
import yo from 'yo-yo'
import page from 'page'

page('/welcome', (ctx, next) => {
  const main = document.getElementById('main-container')
  $(main).empty().append(template(redirectAfter))
})

function template (script) {
  return yo`<div class="Welcome">
    <h1 class="Welcome-message">Tu registro se ha producido satisfactoriamente.¡Gracias!</h1>
    <p class="Welcome-redirect">En breve serás redirigido a la página principal. Si no eres redirigido, clica <a href="/app">aquí</p>
    ${script()}
  </div>
  `
}

function redirectAfter () {
  setTimeout(() => {
    window.location = "/app"
  }, 2000)
}
