module.exports = {
  sortByLikes
}

function sortByLikes (com, sorted) {
  let max = 0
  for(let c in com) {
    if(com[c].likes >= max){
      sorted.unshift(com[c])
      max = com[c].likes
    } else {
      sorted.push(com[c])
    }
  }
}
