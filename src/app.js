import page       from 'page'
import $          from 'jquery'
import articles   from './partials/feed/feed_events'
import percentage from './partials/votes_bar/get_percentage'

import './partials/homepage'
import './partials/login'
import './partials/noticia'
import './partials/signup'
import './partials/search'
import './partials/usuario'
import './partials/usuario_editar'
import './partials/welcome'

$(document).ready(() => {
  articles()
  percentage()
})

page()
