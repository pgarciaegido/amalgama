var yo = require('yo-yo')
var comCard = require('../noticia_comcard/index')

module.exports = function () {
  return yo`<div>
<div class="Noticia_comentarios_list-order Noticia_hide_on_mobile">
  <div class="Noticia_comentarios_list-order-votes">
    <p>Más votado</p>
  </div>
  <div class="Noticia_comentarios_list-order-new">
    <p>Más nuevos</p>
  </div>
</div>
<div class="Noticia_comentarios_list-comments Noticia_hide_on_mobile">
  ${comCard()}
  <div class="Noticia_comentarios_list-comments-create">
    <textarea name="create" id="textarea" cols="30" rows="10"></textarea>
    <div class="Noticia_comentarios_list-comments-create-buttons">
      <button id="enviar-comments" class="Noticia_comentarios_list-comments-create-buttons-enviar">Enviar</button>
      <button id="cancelar-comments" class="Noticia_comentarios_list-comments-create-buttons-cancelar">Cancelar</button>
    </div>
  </div>
</div>
</div>`
}
