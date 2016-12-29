var yo = require('yo-yo')

module.exports = function () {
	return yo`<div class="Details">
				<div class="Details-date">
					<img class="Details-date-icon" src="/img/clock.svg" />
					<span class="Details-date-text">7 diciembre 2016</span>
				</div>
				<div class="Details-tags">
					<img class="Details-tags-icon" src="/img/price-tags.svg" />
					<span class="Details-tags-text">Internacional</span>
				</div>
			</div>`
	}
