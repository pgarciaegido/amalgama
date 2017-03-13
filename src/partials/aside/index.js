import $  from 'jquery'
import yo from 'yo-yo'

import { colorBalance } from './logics'

// Requires the modules files --> object.
import { asideRegister, asideSuscribe, temas, profile } from './modules'

module.exports = function aside (ctx) {
  const container = $('#main-container')
  const ordered = ctx.ordered
  if (document.URL.indexOf('invitado') == -1) {
    let user = ctx.user
    container.append(userTemplate(ordered, user))
  } else {
    container.append(invitadoTemplate(ordered))
  }
  colorBalance()
}

const invitadoTemplate = function (news) {
  return yo`<aside id="aside">
  ${asideRegister()}
  ${temas(news)}
  </aside>`
}

const userTemplate = function (news, user) {
  return yo`<aside id="aside">
  ${profile(user)}
  ${temas(news)}
</aside>`
}
