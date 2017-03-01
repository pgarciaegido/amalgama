import yo from 'yo-yo'

module.exports = {
  template
}

function template (user, error) {
  return yo`<div id="usuario_editar" class="Usuario_editar">
    <h1 class="Usuario_editar-title">${user.username}: Editar perfil</h1>
    <div class="Usuario_editar-container">
      ${avatar()}
      ${editarForm(user, error)}
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

// uses methodOverride to PUT a POST form. Notice the query ?_method=put
// IMPORTANT it looks that it doesnt work if there is another query
function editarForm (user, feedback) {
  return yo`<div class="Usuario_editar_data">
    <h2 class="Usuario_editar_data-title">Mis datos</h2>
    <form method="post" action="/api/editar-user/${user._id}?_method=put" class="Usuario_editar_data-form">
      <label class="Usuario_editar_data-form-email" for="">Correo electrónico:<input name="email" type="email" value="${user.email}" /></label>
      <label class="Usuario_editar_data-form-newpass" for="">Nueva contraseña:<input name="new_password" type="password" /></label>
      <label class="Usuario_editar_data-form-newpass2" for="">Repita la nueva contraseña:<input name="validate_password" type="password" /></label>
      <label class="Usuario_editar_data-form-currentpass" for="">Contraseña actual:<input name="current_password" type="password" /></label>
      <div class="Usuario_editar_data-form-error">${feedback.e}</div>
      <input type="submit" class="Usuario_editar_data-form-submit" value="Actualizar">
    </form>
  </div>`
}
