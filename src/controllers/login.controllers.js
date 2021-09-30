const Usuarios = require('../models/usuarios.model')
const crearToken = require('../helpers/crearToken')
const bcrypt = require('bcrypt')

const loginController = async(req, res) => {
  try {
    const { email, password } = req.body
    const usuario = await Usuarios.findOne({ email:email })
    if (!usuario) {
      res.status(400).json('Credenciales incorrectas')
    }
    const existeUsuario = await bcrypt.compare(password, usuario.password)
    if (!existeUsuario) {
      res.status(400).json('Credenciales incorrectas')
    }
    const token = await crearToken(usuario._id)
    res.status(200).json({ token })
  } catch (err) {
    console.error('Hubo un error en el controlador de loginController', err)
    res.status(400).json(err)
  }
}

module.exports = { loginController }