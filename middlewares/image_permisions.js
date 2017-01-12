module.exports = function (image, req, res) {
  // Si el metodo es get, y si no hay edit, se devuelve true, pues todo el mundo puede ver la img
  if (req.method === 'GET' && req.path.indexOf('edit') < 0) {
    return true
  }

  if (typeof (image.creator) === undefined) return false

  if (image.creator._id.toString() == res.locals.user._id) {
    // Esta imagen la subió el usuario
    return true
  }

  return false
}
