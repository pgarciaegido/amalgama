import $ from 'jquery'

// Get heights of titles and details, so we can add padding to equal the cards

module.exports = function articles () {
  let heights = []
  // Get heights of elements
  $('.Feed-article').each((i, obj) => {
    let title = $(this).find($('.Feed-article-title'))
    title = title.outerHeight(true)
    let details = $(this).find($('.Details'))
    details = details.height()

    let total = title + details
    heights.push(total)
  })

  // Get highest card
  let votesBar = $('.Feed-article').find($('.Votes_bar'))
  let highest = 0

  for (let i in heights) {
    if (heights[i] > highest) {
      highest = heights[i]
    }
  }

  // Add padding to the shortest cards
  votesBar.each((i, obj) => {
    if (heights[i] !== highest) {
      let padding = highest - heights[i] + 'px'
      $(obj).css('padding-top', padding)
    }
  })
}
