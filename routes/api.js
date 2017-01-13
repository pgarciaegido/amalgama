var express = require('express')
var newsCtrl = require('../controllers/news')
var userCtrl = require('../controllers/user')

var sessionMiddleware = require('../middlewares/session') // middleware to ensure that user is logged in

const api = express.Router()

api.get('/news', newsCtrl.getNews)
api.post('/createnew', newsCtrl.createNew)
api.put('/modifynew/:id', newsCtrl.modifyNew)
api.delete('/deletenew/:id', newsCtrl.deleteNew)

api.use('/currentuser', sessionMiddleware)
api.get('/currentuser', userCtrl.getCurrentUser)

module.exports = api
