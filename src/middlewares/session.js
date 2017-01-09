var User = require('../../data/models/user').User

module.exports = function (req, res, next) {
	if(!req.session.user_id) {
		res.redirect('/accede')
	}
	else {
		User.findById(req.session.user_id, function (err, user) {
			if(err){
				console.log(err)
				res.redirect('/login')
			} else {
				res.locals = { user: user }
				next()
			}
		})
	}
}