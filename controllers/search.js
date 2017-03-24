var Post = require('../data/models/posts')

module.exports = {
  search
}

// Makes a query to DB and returns the results that contain word in the TITLE
function search (req, res) {
  var path = req.url.split('/')[1]
  var keyWord = req.query.s

  // Path can be buscar, that looks for regex match into the title, or it can
  // be categoria, that looks for the keyword in the tags array
  var condition = path === 'buscar' ? {'title': { "$regex": keyWord, "$options": "i" }}
                                    : {'tags': keyWord}

  Post.find(condition, function(err, results) {
    if (err) return console.log(err)
    return res.send(results)
  })
}
