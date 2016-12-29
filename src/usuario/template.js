var yo = require('yo-yo')
var card = require('./comments_card')

module.exports = yo`<div id="usuario">
	<div class="Usuario_main">
		<div class="Usuario_main_profile">
			<div class="Usuario_main_profile-avatar">
				<img src="/img/avatar.jpg" alt="avatar" />
			</div>
			<div class="Usuario_main_profile-info">
				<div class="Usuario_main_profile-info-main">
					<h2 class="Usuario_main_profile-info-main-username">pegido</h2>
					<h3 class="Usuario_main_profile-info-main-location">Oviedo</h3>
				</div>
				<div class="Usuario_main_profile-info-links">
					<a href="#" class="Usuario_main_profile-info-links-facebook"><img src="/img/facebook.svg" alt=""></a>
					<a href="#" class="Usuario_main_profile-info-links-twitter"><img src="/img/twitter.svg" alt=""></a>
					<a href="#" class="Usuario_main_profile-info-links-linkedin"><img src="/img/linkedin.svg" alt=""></a>
				</div>
				<button class="Usuario_main_profile-info-editar">Editar perfil</button>
			</div>
		</div>
		<div class="Usuario_main_comments">
			<div class="Usuario_main_comments-stats">
				<div class="Usuario_main_comments-stats-comments">
					<h3 class="Usuario_main_comments-stats-comments-counter">17</h3>
					<span class="Usuario_main_comments-stats-comments-text">Comentarios</span>
				</div>
				<div class="Usuario_main_comments-stats-thumbsup">
					<h3 class="Usuario_main_comments-stats-thumbsup-counter">17</h3>
					<span class="Usuario_main_comments-stats-thumbsup-text">Valoraciones</span>
				</div>
			</div>
			<div class="Usuario_main_comments-header">
				<h2 class="Usuario_main_comments-header-title">Mis comentarios</h2>
				<div class="Usuario_main_comments-header-order">
					<button class="Usuario_main_comments-header-order-votes">Más votados</button>
					<button class="Usuario_main_comments-header-order-new">Más nuevos</button>
				</div>
			</div>
			<div class="Usuario_main_comments-container">
				${card()}
			</div>
		</div>
	</div>
	<div class="Usuario_aside">
		<div class="Usuario_aside-stats">
			<div class="Usuario_aside-stats-comments">
				<h3 class="Usuario_aside-stats-comments-counter">17</h3>
				<span class="Usuario_aside-stats-comments-text">Comentarios</span>
			</div>
			<div class="Usuario_aside-stats-thumbsup">
				<h3 class="Usuario_aside-stats-thumbsup-counter">17</h3>
				<span class="Usuario_aside-stats-thumbsup-text">Valoraciones</span>
			</div>
		</div>
	</div>
</div>`