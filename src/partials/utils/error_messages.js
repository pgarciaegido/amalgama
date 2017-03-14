module.exports = {
  errorMessage
}

const emailInvalid = "El email es inválido. Revise que esté bien escrito."
const emailSame = "El email introducido es el mismo que ya tiene su cuenta."
const passwordNotMatch = "Las contraseñas no coinciden. Revise que sean iguales."
const currentPassInvalid = "La contraseña actual es incorrecta."
const noUser = "El usuario introducido no existe."
const errPass = "La contraseña es incorrecta."
const userExists = "El usuario ya está registrado. Por favor, elija otro nombre"
const shortPass = "La contraseña tiene que tener más de 8 caracteres."

function errorMessage (query) {
  if(query === "invalid") {
    return emailInvalid
  } else if (query === "dif") {
    return passwordNotMatch
  } else if (query === "esame") {
    return emailSame
  } else if (query === "nouser") {
    return noUser
  } else if (query === "errpass") {
    return errPass
  } else if (query === "uexists") {
    return userExists
  } else if (query === "shortp") {
    return shortPass
  }
  return ''
}
