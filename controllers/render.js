var Post = require('../data/models/posts')

module.exports = {
  renderIndex,
  renderCreate,
  redirectApp,
  renderEdit
}

function renderIndex (req, res) {
  res.render('index')
}

function renderCreate (req, res) {
  // Empty variables so templates work correctly.
  res.render('createPost',
              {id: '',
               title: '',
               subtitle: '',
               tags: '',
               media: ''})
}

// Renders edit form with post info ============================================
function renderEdit (req, res) {

  // Finds post from postid
  var postId = req.params.id

  Post.findById(postId, function(err, post){
    if (err) return err
    if(!post) return res.send('Post does not exist!!')

    // Render template with current data from post.
    res.render('editPost',
               {id: postId,
                title: post.title,
                subtitle: post.subtitle,
                tags: post.tags,
                media: JSON.stringify(post.media)})
  })
}

function redirectApp (req, res) {
  res.redirect('/app')
}
