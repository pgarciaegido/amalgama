import yo from 'yo-yo'

module.exports = {
  template
}

function template (user, error) {
  return yo`<div id="usuario_editar" class="Usuario_editar">
    <h1 class="Usuario_editar-title">${user.username}: Editar perfil</h1>
    ${editarForm(user, error)}
  </div>`
}

// uses methodOverride to PUT a POST form. Notice the query ?_method=put
// IMPORTANT it looks that it doesnt work if there is another query
function editarForm (user, feedback) {
  return yo`<div class="Usuario_editar_data">
    <h2 class="Usuario_editar_data-title">Mis datos</h2>
    <form method="post" action="/api/editar-user/${user._id}?_method=put" class="Usuario_editar_data-form">
      ${emailForm()}
      ${passwordForm()}
      <label class="Usuario_editar_data-form-currentpass" for="">Contraseña actual (obligatorio):<input name="current_password" type="password" /></label>
      <div class="Usuario_editar_data-form-error">${feedback.e}</div>
      <div class="Usuario_editar_data-form-success">${feedback.suc}</div>
      <input type="submit" class="Usuario_editar_data-form-submit" value="Actualizar">
    </form>
  </div>`
}

function emailForm() {
  return yo`<div class="Usuario_editar_data-form-email">
    <label>Nuevo correo electrónico:
      <input name="email" type="email"/>
    </label>
    <label>Confirmar nuevo correo:
      <input name="verify_email" type="vemail" />
    </label>
  </div>`
}

function passwordForm() {
  return yo`<div class="Usuario_editar_data-form-newpass">
    <label>Nueva contraseña:
      <input name="new_password" type="password"/>
    </label>
    <label>Repita la nueva contraseña:
      <input name="validate_password" type="password"/>
    </label>
  </div>`
}
