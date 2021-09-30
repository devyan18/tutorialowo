const express = require('express')
const router = express.Router()
const { obtenerUsuario, obtenerUsuarios, agregarUsuario, editarUsuario, eliminarUsuario } = require('../controllers/usuarios.controllers')
const {   validarAgregarUsuario, validarEditarUsuario, validarEliminarUsuario, validarCampos } = require('../middlewares/validarCamposUsuarios')
const validarToken = require('../middlewares/validarToken')

router.get('/get-users', obtenerUsuarios)
router.get('/get-user/:id', obtenerUsuario)
router.post('/create-user',[ validarAgregarUsuario(), validarCampos ], agregarUsuario)
router.put('/edit-user/:id', [ validarEditarUsuario(), validarCampos, validarToken ] ,editarUsuario)
router.delete('/delete-user', [  validarEliminarUsuario(), validarCampos, validarToken ] ,eliminarUsuario)


module.exports = router