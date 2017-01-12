var $ = require('jquery')

// Get heights of titles and details, so we can add padding to equal the cards

module.exports = function articles () {
  var heights = []
  // Get heights of elements
  $('.Feed-article').each(function (i, obj) {
    var title = $(this).find($('.Feed-article-title'))
    title = title.outerHeight(true)
    var details = $(this).find($('.Details'))
    details = details.height()

    var total = title + details
    heights.push(total)
  })

  // Get highest card
  var votesBar = $('.Feed-article').find($('.Votes_bar'))
  var highest = 0

  for (var i in heights) {
    if (heights[i] > highest) {
      highest = heights[i]
    }
  }

  // Add padding to the shortest cards
  votesBar.each(function (i, obj) {
    if (heights[i] !== highest) {
      var padding = highest - heights[i] + 'px'
      $(obj).css('padding-top', padding)
    }
  })
}
