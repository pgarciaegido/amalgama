import $                  from 'jquery'
import header             from '../header/index'
import page               from 'page'
import { template }       from './template'
import { errorMessage }   from '../utils/error_messages'
import { getCurrentUser } from '../ajax/index'

page('/app/editar/:username', getCurrentUser, header, (ctx, next) => {
  require('../header/events')
  const user = ctx.user
  const query = ctx.querystring
  const error = errorMessage(query)

  const main = document.getElementById('main-container')
  $(main).empty().append(template(user, error))
})
