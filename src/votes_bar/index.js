var yo = require('yo-yo')

module.exports = function () {
	return yo`<div class="Votes_bar">
			<div class="Votes_bar-colors">
				<div class="Votes_bar-colors-red"></div>
				<div class="Votes_bar-colors-green"></div>
			</div>
			<div class="Votes_bar-numbers">
				<span class="Votes_bar-numbers-green">220</span>
				<span class="Votes_bar-numbers-red">220</span>
			</div>
		</div>`
	}