var yo = require('yo-yo')

module.exports = yo`<div id="login">
    <div class="Signup_image">
      <img src="http://www.quickanddirtytips.com/sites/default/files/images/1329/speech-podium.jpg" alt="" class="Signup_image-img" />
    </div>
    <div class="Login_form">
      <h1 class="Login_form-title">Accede a tu cuenta</h1>
      <h3 class="Login_form-subtitle">Accede a tu cuenta a través de Facebook, Google, o tu email</h3>
      <div class="Login_form-social">
        <button class="Login_form-social-facebook">Accede con Facebook</button>
        <button class="Login_form-social-google">Accede con Google</button>
      </div>
      <form action="/sessions" method="POST" class="Login_form-form">
        Nombre de usuario o email
        <input type="email" placeholder="Introduzca su nombre de usuario o email" name="email" />
        Contraseña
        <input type="password" placeholder="Introduzca su contraseña" name="password"/>
        <input class="Login_form-form-submit" type="Submit" value="Accede">
      </form>
      <h2>No tengo cuenta! Quisiera registrarme</h2>
      <a href="/registrate"><button>Regístrame!</button></a>
    </div>
  </div>`
