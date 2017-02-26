var mongoose = require('mongoose')
var Schema = mongoose.Schema

var postsSchema = new Schema({
  title: {type: String, required: true},
  date: { type: Date, default: Date.now },
  tags: {type: Array, required: true},
  subtitle: {type: String, required: true},
  agreeVotes: {type: Number, default: 0},
  disagreeVotes: {type: Number, default: 0}
})

var Posts = mongoose.model('post', postsSchema)

module.exports = Posts
