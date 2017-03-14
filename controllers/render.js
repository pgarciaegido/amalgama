function renderIndex (req, res) {
  console.log(req.session)
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
