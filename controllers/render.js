function renderIndex (req, res) {
  res.render('index')
}

function redirectApp (req, res) {
  res.redirect('/app')
}

module.exports = {
  renderIndex,
  redirectApp
}
