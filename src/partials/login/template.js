import yo from 'yo-yo'

module.exports = function login (feedback) {
  return yo`<div id="login">
    <div class="Login_form">
      <h1 class="Login_form-title">Accede a tu cuenta</h1>
      <form action="/login" method="POST" class="Login_form-form">
        Nombre de usuario
        <input type="text" placeholder="Introduzca su nombre de usuario" name="username" value="${feedback.u || ''}" />
        Contraseña
        <input type="password" placeholder="Introduzca su contraseña" name="password"/>
        <div class="Login_form-form-error">${feedback.e || ''}</div>
        <input class="Login_form-form-submit" type="Submit" value="Accede">
      </form>
      <h3 class="Login_form-signup-title">No tengo cuenta! Quisiera <a href="/registrate">registrarme</a></h3>
    </div>
  </div>`
}
