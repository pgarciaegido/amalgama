import yo from 'yo-yo'

module.exports = { asideRegister, asideSuscribe, temas, profile }

// ****** Aside templates
function asideRegister () {
  return yo`<div class="Aside_registrate">
    <h2 class="Aside_registrate-title">Regístrate</h2>
    <p class="Aside_registrate-subtitle">
      Únete a la comunidad, vota y comparte tu opinión. ¡Queremos escucharte!
    </p>
    <form class="Aside_registrate-form" action="/usersignup" method="POST">
      <label for="">Nombre usuario:
        <input name ="username" type="text">
      </label>
      <label for="">Email:
        <input name="email" type="email">
      </label>
      <label for="">Contraseña:
        <input name="password" type="password">
      <label for="">Repita la contraseña:
        <input name="password_confirmation" type="password">
      </label>
      <input class="Aside_registrate-form-button" type="submit" value="Regístrate">
    </form>
    <button class="Aside_registrate-facebook">Regístrate con Facebook</button>
    <button class="Aside_registrate-google">Regístrate con Google</button>
  </div>`
}

function asideSuscribe () {
  return yo`<div class="Aside_subscribe">
        <h2 class="Aside_subscribe-title">¡Suscríbete</h2>
        <p class="Aside_subscribe-subtitle">Suscríbete y te enviaremos un email cuando haya una nueva entrada. No te enviaremos publicidad, ni daremos tus datos a nadie. Palabra.</p>
        <form action="" class="Aside_subscribe-form">
          <label for="" class="Aside_subscribe-form-label">Email:<input type="email" placeholder="ejemplo@gmail.com"></label>
          <input class="Aside_subscribe-form-button"type="submit" value="¡Regístrame!">
        </form>
      </div>`
}

// ****** TEMAS

function temas (news) {
  return yo`<div class="Aside_temas">
    <h2 class="Aside_temas-title">Temas más votados</h2>
    ${news.map(function (post) {
      return masVotados(post)
    })}
  </div>`
}

function masVotados (post) {
  return yo`<div class="Aside_temas-tema">
      <p class="Aside_temas-tema-title">${post.title}</p>
      <div class="Aside_temas-tema-info">
        <span class="Aside_temas-tema-info-votes">${post.total} votos</span>
        <span class="Aside_temas-tema-info-balance">${post.balance}</span>
      </div>
    </div>`
}

// ****** TEMAS

function profile (user) {
  return yo`<div class="Aside_profile">
      <h2 class="Aside_profile-title">Mi perfil</h2>
      <img src="/img/avatar.jpg" alt="avatar" class="Aside_profile-avatar" />
      <h3 class="Aside_profile-username">${user.username}</h3>
      <div class="Aside_profile-buttons">
        <button class="Aside_profile-buttons-edit"><a href="/app/usuario/${user.username}">Editar</a></button>
        <form method="POST" action="/app/logout">
          <input type="submit" value="Logout" class="Aside_profile-buttons-logout" />
        </form>
      </div>
    </div>`
}
