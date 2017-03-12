import yo from 'yo-yo'

module.exports = function (feedback) {
  return yo`<div id="signup">
    <div class="Signup_form">
      <h1 class="Signup_form-title">¡Regístrate y opina!</h1>
      <form action="usersignup" method="post" class="Signup_form-form">
        <div>
          Nombre de usuario
          <input type="text" placeholder="Introduzca su nombre de usuario" name="username" value="${feedback.n || ''}" />
        </div>
        <div>
          Email
          <input type="email" placeholder="Introduzca su correo electrónico" name="email" value="${feedback.m || ''}" />
        </div>
        <div>
          Contraseña
          <input type="password" name="password" />
        </div>
        <div>
          Confirma tu contraseña
          <input type="password" name="password_confirmation" />
        </div>
        <div class="Signup_form-form-error">${feedback.e || ''}</div>
        <input class="Signup_form-form-submit" type="Submit" value="¡Regístrame!" />
      </form>
      <h3 class="Signup_form-login">Ya tengo cuenta. Quisiera <a href="accede">acceder.</a></h3> 
    </div>
  </div>`
}
