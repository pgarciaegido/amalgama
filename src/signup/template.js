var yo = require('yo-yo')

module.exports = function () {
  return yo`<div id="signup">
    <div class="Signup_image">
      <img src="http://www.quickanddirtytips.com/sites/default/files/images/1329/speech-podium.jpg" alt="" class="Signup_image-img" />
    </div>
    <div class="Signup_form">
      <h1 class="Signup_form-title">¡Regístrate y opina!</h1>
      <h3 class="Signup_form-subtitle">Regístrate y podrás votar y opinar en todos los temas. ¡No te llevará más de 2 minutos!</h3>
      <div class="Signup_form-social">
        <button class="Signup_form-social-facebook">Regístrate con Facebook</button>
        <button class="Signup_form-social-google">Regístrate con Google</button>
      </div>
      <form action="usersignup" method="post" class="Signup_form-form">
        <div>
          Nombre de usuario
          <input type="text" placeholder="Introduzca su nombre de usuario" name="username" />
          Email
          <input type="email" placeholder="Introduzca su correo electrónico" name="email"/>
          Contraseña
          <input type="password" name="password" />
        </div>
        <input class="Signup_form-form-submit" type="Submit" value="¡Regístrame!" />
      </form>
    </div>
  </div>`
}
