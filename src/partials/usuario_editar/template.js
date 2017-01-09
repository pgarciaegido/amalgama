var yo = require('yo-yo')

module.exports = yo`<div id="usuario_editar" class="Usuario_editar">
  <h1 class="Usuario_editar-title">Editar perfil</h1>
  <div class="Usuario_editar-container">
    <div class="Usuario_editar_personal">
      <h2 class="Usuario_editar_personal-avtitle">Mi avatar</h2>
      <div class="Usuario_editar_personal-avatar">
        <img src="/img/avatar.jpg" alt="" class="Usuario_editar_personal-avatar-imagen" />
        <button class="Usuario_editar_personal-avatar-button">Cambiar avatar</button>
      </div>
      <h2 class="Usuario_editar_personal-rstitle">Mis Redes Sociales</h2>
      <div class="Usuario_editar_personal-rrss">
        <div class="Usuario_editar_personal-rrss-facebook">
          <img src="/img/facebook.svg" alt="" class="Usuario_editar_personal-rrss-facebook-icon">
          <input type="text" class="Usuario_editar_personal-rrss-facebook-input" />
        </div>
        <div class="Usuario_editar_personal-rrss-twitter">
          <img src="/img/twitter.svg" alt="" class="Usuario_editar_personal-rrss-twitter-icon">
          <input type="text" class="Usuario_editar_personal-rrss-twitter-input" />
        </div>
        <div class="Usuario_editar_personal-rrss-linkedin">
          <img src="/img/linkedin.svg" alt="" class="Usuario_editar_personal-rrss-linkedin-icon">
          <input type="text" class="Usuario_editar_personal-rrss-linkedin-input" />
        </div>
      </div>
    </div>
    <div class="Usuario_editar_data">
      <h2 class="Usuario_editar_data-title">Mis datos</h2>
      <form action="" class="Usuario_editar_data-form">
        <label class="Usuario_editar_data-form-username" for="">Nombre de usuario:<input type="text" /></label>
        <label class="Usuario_editar_data-form-email" for="">Correo electrónico:<input type="email" /></label>
        <label class="Usuario_editar_data-form-newpass" for="">Nueva contraseña:<input type="password" /></label>
        <label class="Usuario_editar_data-form-newpass2" for="">Repita la nueva contraseña:<input type="password" /></label>
        <label class="Usuario_editar_data-form-currentpass" for="">Contraseña actual:<input type="password" /></label>
        <input type="submit" class="Usuario_editar_data-form-submit" value="Actualizar">
      </form>
    </div>
  </div>
</div>`
