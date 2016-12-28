var yo = require('yo-yo')
var details = require('../details/index')
var votesBar = require('../votes_bar/index')

module.exports = yo`<div class="Feed">
		<article class="Feed-article impar">
			<h2 class="Feed-article-title">Es necesaria la subida de impuestos del PP?</h2>
				${details()}
			<div class="Feed-article-bars">
				${votesBar()}
			</div>
			<button class="Feed-article-button">Ver más</button>
		</article>
	</div>`