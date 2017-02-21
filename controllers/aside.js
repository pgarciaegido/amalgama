var Posts = require('../data/models/posts')

function orderTemas (req, res) {
  // From db, sums agreeVotes and DisagreeVotes, substracts to get the balance and includes the title
  // sort it descending
  // and limits only to 5 results
  let query = [{ $project: { total:   { $add:       [ "$agreeVotes", "$disagreeVotes" ]},
                             balance: { $subtract: [ "$agreeVotes", "$disagreeVotes" ]},
                             title: 1 }},
               {'$sort': {'total': -1}},
               {'$limit': 5}]

  Posts.aggregate(query, function(err, obj) {
    if (err){
      console.log(err)
    }
    res.send(obj)
  })
}

module.exports = { orderTemas }
