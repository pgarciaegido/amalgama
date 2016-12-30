var yo = require('yo-yo')

module.exports = function (date, tags) {

  return yo`<div class="Details">
        <div class="Details-date">
          <img class="Details-date-icon" src="/img/clock.svg" />
          <span class="Details-date-text">${date}</span>
        </div>
        <div class="Details-tags">
          <img class="Details-tags-icon" src="/img/price-tags.svg" />
          <span class="Details-tags-text">${tags}</span>
        </div>
      </div>`
}
