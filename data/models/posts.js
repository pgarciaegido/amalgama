var mongoose = require('mongoose')
var Schema = mongoose.Schema

var posts_schema = new Schema({
	id: {type: Number, required: true},
	title: {type: String, required: true},
	date: {type: String},
	tags: {type: Array, required: true},
	subtitle: {type: String, required: true},
	agreeVotes: {type: Number},
	disagreeVotes: {type: Number}
})

var Posts = mongoose.model('post', posts_schema)

module.exports = Posts