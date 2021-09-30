const Usuarios = require('../models/usuarios.model')
const bcrypt = require('bcrypt')

const obtenerUsuarios = async(req, res) => {
  try {
    const todosLosUsuarios = await Usuarios.find({ estado: true })
    res.status(200).json(todosLosUsuarios)
  } catch (err) {
    console.error('Hubo un error en el controlador de obtenerUsuarios', err)
    res.status(500).json(err)
  }
}

const obtenerUsuario = async(req, res) => {
  try {
    const unUsuario = await Usuarios.findById(req.params.id)
    res.status(200).json(unUsuario)
  } catch (err) {
    console.error('Hubo un error en el controlador de obtenerUsuario', err)
    res.status(404).json(err)
  }
}

const agregarUsuario = async(req, res) => {
  try {
    const { email, password } = req.body
    const nuevaPassword = await bcrypt.hash(password, 10)
    const nuevoUsuario = new Usuarios({ email, password: nuevaPassword })
    await nuevoUsuario.save()
    res.status(201).json('Usuario Creado Correctamente')
  } catch (err) {
    console.error('Hubo un error en el controlador de agregarUsuario', err)
    res.status(401).json(err)
  }
}

const editarUsuario = async(req, res) => {
  try {
    const { email, password } = req.body
    const nuevaPassword = await bcrypt.hash(password, 10)
    await Usuarios.findByIdAndUpdate(req.params.id, { email, password: nuevaPassword })
    res.status(203).json('Usuario editado correctamente')
  } catch (err) {
    console.error('Hubo un error en el controlador de editarUsuario', err)
    res.status(403).json(err)
  }
}

const eliminarUsuario = async(req, res) => {
  try {
    await Usuarios.findByIdAndUpdate(req.body.id, { estado: false })
    res.status(203).json('Usuario Desactivado Correctamente')
  } catch (err) {
    console.error('Hubo un error en el controlador de eliminarUsuario', err)
    res.status(403).json(err)
  }
}


module.exports = {
  obtenerUsuario,
  obtenerUsuarios,
  agregarUsuario,
  editarUsuario,
  eliminarUsuario
}