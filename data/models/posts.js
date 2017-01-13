var mongoose = require('mongoose')
var Schema = mongoose.Schema

var postsSchema = new Schema({
  title: {type: String, required: true},
  date: {type: String},
  tags: {type: Array, required: true},
  subtitle: {type: String, required: true},
  agreeVotes: {type: Number},
  disagreeVotes: {type: Number}
})

var Posts = mongoose.model('post', postsSchema)

module.exports = Posts
