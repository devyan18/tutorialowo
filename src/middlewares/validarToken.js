const jwt = require('jsonwebtoken')
const Usuarios = require('../models/usuarios.model')

require('dotenv').config()

const validarToken = async (req, res, next) => {
  const token = req.headers.token
  if (!token) {
    return res.status(400).json('Token invalido')
  }
  try {
    const { id } = await jwt.verify(token, process.env.FIRMA)
    const datosDeUsuario = await Usuarios.findOne({ _id: id, estado: true })

    if (!datosDeUsuario) {
      return res.status(400).json('Token invalido')
    }

    req.usuarioRole = datosDeUsuario.role

    next()
  } catch (err) {
    return res.status(400).json('Token invalido: '+ err)
  }
}

module.exports = validarToken