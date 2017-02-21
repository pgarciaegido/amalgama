var mongoose = require('mongoose')
var Schema = mongoose.Schema

var commentsSchema = new Schema({
  number: Number,
  userid: String,
  username: String,
  postid: String,
  postTitle: String,
  agree: Boolean,
  disagree: Boolean,
  comment: {type: String, minlength: [2, 'El post tiene que ser mayor que 2 caracteres']},
  date: String,
  likes: Number,
  likedBy: Array
})

var Comments = mongoose.model('Comments', commentsSchema)

module.exports = Comments
