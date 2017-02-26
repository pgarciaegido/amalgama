function renderIndex (req, res) {
  res.render('index')
}

function renderCreate (req, res) {
  res.render('createPost')
}

function redirectApp (req, res) {
  res.redirect('/app')
}

module.exports = {
  renderIndex,
  renderCreate,
  redirectApp
}
