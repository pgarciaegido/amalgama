var express = require('express')
var newsCtrl = require('../controllers/news')
var userCtrl = require('../controllers/user')
var comCtrl = require('../controllers/comments')

var sessionMiddleware = require('../middlewares/session') // middleware to ensure that user is logged in

const api = express.Router()

api.get('/news', newsCtrl.getNews)
api.get('/news/:id', newsCtrl.getNew)
api.post('/createnew', newsCtrl.createNew)
api.put('/modifynew/:id', newsCtrl.modifyNew)
api.delete('/deletenew/:id', newsCtrl.deleteNew)

api.post('/upvote', newsCtrl.vote)
api.post('/unupvote', newsCtrl.vote)
api.post('/downvote', newsCtrl.vote)
api.post('/undownvote', newsCtrl.vote)

api.post('/comment', comCtrl.createAgreeComment)

api.use('/currentuser', sessionMiddleware)
api.get('/currentuser', userCtrl.getCurrentUser)

module.exports = api
