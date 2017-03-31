module.exports = function articlesSetEqualHeights () {
  let titles = Array.from(document.getElementsByClassName('Feed-article-title'))
  let highest = 0;
  // Get highest title offset
  titles.forEach((title) => {
    if(title.offsetHeight > highest)
      highest = title.offsetHeight
  })
  // Sets margin-bottom
  titles.forEach((title) => {
    let separator = title.parentElement.getElementsByClassName('feed-separator')[0]
    if(title.offsetHeight < highest)
      separator.style.paddingBottom = Number(highest - title.offsetHeight) + 'px'
  })
}
