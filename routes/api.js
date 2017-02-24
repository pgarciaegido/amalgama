var express = require('express')
var newsCtrl = require('../controllers/news')
var userCtrl = require('../controllers/user')
var comCtrl = require('../controllers/comments')
var asideCtrl = require('../controllers/aside')
var searchCtrl = require('../controllers/search')

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

api.get('/get-comments', comCtrl.getComments)
api.get('/get-comment-post/:id', comCtrl.getCommentsPost)
api.get('/get-comment-post-agree/:id', comCtrl.getCommentsPost)
api.get('/get-comment-post-disagree/:id', comCtrl.getCommentsPost)
api.get('/getcommentuser/:username', comCtrl.getCommentsUser)
api.post('/commentagree', comCtrl.createComment)
api.post('/commentdisagree', comCtrl.createComment)

api.post('/comment-like/:id', comCtrl.likeComment)
api.post('/comment-unlike/:id', comCtrl.likeComment)

api.get('/order-temas', asideCtrl.orderTemas)

api.use('/currentuser', sessionMiddleware)
api.get('/currentuser', userCtrl.getCurrentUser)

api.get('/buscar', searchCtrl.search)

module.exports = api
