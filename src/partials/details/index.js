import yo from 'yo-yo'
import moment from 'moment'
import formatDate from '../utils/date'

module.exports = function (date, tags) {
  return yo`<div class="Details">
        <div class="Details-date">
          <span class="Details-date-icon"></span>
          <span class="Details-date-text">${formatDate(date)}</span>
        </div>
        <div class="Details-tags">
          <span class="Details-tags-icon"></span>
          ${displayTags(tags)}
        </div>
      </div>`
}

function displayTags (tags) {
  return tags.map(function (tag) {
    return yo`<span class="Details-tags-text"><a href="/app/categoria/?s=${tag}">${tag}</a></span>`
  })
}
