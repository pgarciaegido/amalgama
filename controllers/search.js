var Post = require('../data/models/posts')

module.exports = {
  search
}

function search (req, res) {
  var keyWord = req.query.s
  var condition = {'title': { "$regex": keyWord, "$options": "i" }}

  Post.find(condition, function(err, results) {
    if (err){
      console.log(err)
    }
    // Returns json
    res.send(results)
  })
}
