import yo from 'yo-yo'

import { colorBalance } from './logics'

// Requires the modules files --> object.
import { asideRegister, asideSuscribe, temas, profile } from './modules'

module.exports = function aside (ctx) {
  const container = document.getElementById('main-container')
  const ordered = ctx.ordered

  if (ctx.user) {
    let user = ctx.user
    container.appendChild(userTemplate(ordered, user))
  } else {
    container.appendChild(invitadoTemplate(ordered))
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
