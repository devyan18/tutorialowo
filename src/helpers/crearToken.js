const jwt = require('jsonwebtoken')

const crearToken = (id) => {

  return new Promise(
    (resolve, reject) => {
    jwt.sign({ id }, process.env.FIRMA, (err, token) => {
      if (err) {
        reject('Error al crear el token', err)
      }
      resolve(token)
    })
  })

}


module.exports = crearToken