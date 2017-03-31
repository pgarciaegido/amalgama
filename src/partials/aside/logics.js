module.exports = { colorBalance }

// If the balance is positive, color = green
function colorBalance () {
  // Array.from creates an array from an HTMLCollection
  let temas = Array.from(document.getElementsByClassName('Aside_temas-tema'))
  temas.forEach((tema) => {
    let balance = tema.getElementsByClassName('Aside_temas-tema-info-balance')[0]
    if (balance.innerHTML.charAt(0) !== '-')
      balance.style.color = '#7ace7a'
  })
}
