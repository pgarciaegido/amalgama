module.exports = {
  errorMessage
}

const emailInvalid = "El email es inválido. Revise que esté bien escrito."
const emailSame = "El email introducido es el mismo que ya tiene su cuenta."
const emailExists = "El email ya está registrado."
const emailsDiffer = "Los emails introducidos no coinciden"
const passwordNotMatch = "Las contraseñas no coinciden. Revise que sean iguales."
const currentPassInvalid = "La contraseña actual es incorrecta."
const noUser = "El usuario introducido no existe."
const errPass = "La contraseña es incorrecta."
const userExists = "El usuario ya está registrado. Por favor, elija otro nombre"
const shortPass = "La contraseña tiene que tener más de 8 caracteres."
const unknown = "Se ha producido un error desconocido. Por favor intentelo de nuevo más tarde."

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
  } else if (query === "eexists") {
    return emailExists
  } else if (query === "cerrpass") {
    return currentPassInvalid
  } else if (query === "edif") {
    return emailsDiffer
  } else if (query === "unknown") {
    return unknown
  }
  return ''
}
