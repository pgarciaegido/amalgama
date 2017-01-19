import page       from 'page'
import $          from 'jquery'
import articles   from './partials/feed/feed_events'
import percentage from './partials/votes_bar/get_percentage'

import './partials/homepage'
import './partials/noticia'
import './partials/usuario'
import './partials/usuario_editar'
import './partials/signup'
import './partials/login'

$(document).ready(() => {
  articles()
  percentage()
})

page()
