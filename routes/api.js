var express = require('express')
var newsCtrl = require('../controllers/news')
var userCtrl = require('../controllers/user')
var comCtrl = require('../controllers/comments')
var asideCtrl = require('../controllers/aside')
var searchCtrl = require('../controllers/search')
var renderCreate = require('../controllers/render').renderCreate

var sessionMiddleware = require('../middlewares/session') // middleware to ensure that user is logged in

const api = express.Router()

// Gets all the post
api.get('/news', newsCtrl.getNews)
// Gets and specific post by its mongo_id
api.get('/news/:id', newsCtrl.getNew)
// Renders a form to fill a new post
api.get('/create-new', renderCreate)
// Creates an instance on db with new post
api.post('/createnew', newsCtrl.createNew)
// Modify certain post
api.put('/modifynew/:id', newsCtrl.modifyNew)
// Delete certain post
api.delete('/deletenew/:id', newsCtrl.deleteNew)

// Upvotes or downvote posts
api.post('/upvote', newsCtrl.vote)
api.post('/unupvote', newsCtrl.vote)
api.post('/downvote', newsCtrl.vote)
api.post('/undownvote', newsCtrl.vote)

// Gets json of all comments
api.get('/get-comments', comCtrl.getComments)
// Gets json of all comments in certain post
api.get('/get-comment-post/:id', comCtrl.getCommentsPost)
// Gets json of all agree comments in certain post
api.get('/get-comment-post-agree/:id', comCtrl.getCommentsPost)
// Gets json of all disagree comments in certain post
api.get('/get-comment-post-disagree/:id', comCtrl.getCommentsPost)
// Gets json of all comments mabe by user
// Depending on the query, returns it ordered by likes or date
api.get('/get-comment-user/:username', comCtrl.getCommentsUser)
// Inserts a new comment agreeing on a certain post
api.post('/commentagree', comCtrl.createComment)
// Inserts a new comment disagreeing on a certain post
api.post('/commentdisagree', comCtrl.createComment)

// Likes a comment made by a user
api.post('/comment-like/:id', comCtrl.likeComment)
// Unlikes a comment made by a user (previously liked)
api.post('/comment-unlike/:id', comCtrl.likeComment)

// Gets the most voted posts (5 of them)
api.get('/order-temas', asideCtrl.orderTemas)

api.use('/currentuser', sessionMiddleware)
api.get('/currentuser', userCtrl.getCurrentUser)

// Search page. It normally works like '/buscar/?s=something'
api.get('/buscar', searchCtrl.search)

module.exports = api
