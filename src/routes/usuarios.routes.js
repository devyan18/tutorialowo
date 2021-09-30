const express = require('express')
const router = express.Router()
const {
  obtenerUsuario,
  obtenerUsuarios,
  agregarUsuario,
  editarUsuario,
  eliminarUsuario
} = require('../controllers/usuarios.controllers')


router.get('/', obtenerUsuarios)
router.get('/:id', obtenerUsuario)
router.post('/', agregarUsuario)
router.put('/:id', editarUsuario)
router.delete('/:id', eliminarUsuario)


module.exports = router