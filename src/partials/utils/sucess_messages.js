module.exports = {
  successMessage
}

const sucUpdated = "¡Sus datos han sido actualizados correctamente!"


function successMessage (query) {
  if(query === "upsuccess") {
    return sucUpdated
  }
}
