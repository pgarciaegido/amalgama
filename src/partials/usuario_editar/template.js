import yo from 'yo-yo'

module.exports = {
  template
}

function template (user) {
  return yo`<div id="usuario_editar" class="Usuario_editar">
    <h1 class="Usuario_editar-title">${user.username}: Editar perfil</h1>
    <div class="Usuario_editar-container">
      ${avatar()}
      ${editarForm(user)}
    </div>
  </div>`
}

function avatar () {
  return yo`<div class="Usuario_editar_personal">
    <h2 class="Usuario_editar_personal-avtitle">Mi avatar</h2>
    <div class="Usuario_editar_personal-avatar">
      <img src="/img/avatar.jpg" alt="" class="Usuario_editar_personal-avatar-imagen" />
      <button class="Usuario_editar_personal-avatar-button">Cambiar avatar</button>
    </div>
  </div>`
}

function editarForm (user) {
  return yo`<div class="Usuario_editar_data">
    <h2 class="Usuario_editar_data-title">Mis datos</h2>
    <form action="" class="Usuario_editar_data-form">
      <label class="Usuario_editar_data-form-email" for="">Correo electrónico:<input type="email" value="${user.email}" /></label>
      <label class="Usuario_editar_data-form-newpass" for="">Nueva contraseña:<input type="password" /></label>
      <label class="Usuario_editar_data-form-newpass2" for="">Repita la nueva contraseña:<input type="password" /></label>
      <label class="Usuario_editar_data-form-currentpass" for="">Contraseña actual:<input type="password" /></label>
      <input type="submit" class="Usuario_editar_data-form-submit" value="Actualizar">
    </form>
  </div>`
}
