var yo = require('yo-yo')
var $ = require('jquery')
var getPercentage = require('./get_percentage')

module.exports = function (agree, disagree) {
  $(document).ready(function () {
    getPercentage(agree, disagree)
  })
  return yo`<div class="Votes_bar">
      <div class="Votes_bar-colors">
        <div class="Votes_bar-colors-red"></div>
        <div class="Votes_bar-colors-green"></div>
      </div>
      <div class="Votes_bar-numbers">
        <span class="Votes_bar-numbers-green">${agree}</span>
        <span class="Votes_bar-numbers-red">${disagree}</span>
      </div>
    </div>`
}
