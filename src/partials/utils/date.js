module.exports = function formatDate(date){
  // date comes like: 2017-02-26T12:25:57.688Z
  let year = date.slice(0, 4)
  let month = date.slice(5, 7)
  let day = date.slice(8, 10)
  let hour = date.slice(11, 13)
  let minute = date.slice(14, 16)
  return date = `${day}/${month}/${year}   ${hour}:${minute}`
}
