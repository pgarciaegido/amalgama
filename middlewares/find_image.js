var Imagen = require('../data/models/images')

module.exports = function (req, res, next) {
	Imagen.findById(req.params.id)
				.populate('creator') // Esta referencia se hace en el Schema del modelo de IMAGEN. 
				.exec(function (err, imagen) {
					if (imagen != null) {
						res.locals.imagen = imagen
						next()
					} else {
						console.log(err)
						res.redirect('/app')
					}
				})
}