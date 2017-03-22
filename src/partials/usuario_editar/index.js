import $                  from 'jquery'
import header             from '../header/index'
import page               from 'page'
import { template }       from './template'
import queryHandler from '../utils/query_handler'
import { getCurrentUser } from '../ajax/index'

page('/app/editar/:username', getCurrentUser, header, (ctx, next) => {
  require('../header/events')
  const user = ctx.user
  const query = ctx.querystring
  const feedback = queryHandler(query)
  console.log(feedback)

  const main = document.getElementById('main-container')
  $(main).empty().append(template(user, feedback))
})
