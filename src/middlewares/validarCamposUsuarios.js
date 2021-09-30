const { check, validationResult } = require('express-validator')

const validarAgregarUsuario = () => {
  return [
    check('email', 'Email Invalido')
      .isEmail()
      .normalizeEmail()
      .trim()
      .escape(),
    check('password', 'Password Invalida')
      .trim()
      .escape()
      .isLength({ min: 6 })
  ]
}

const validarEditarUsuario = () => {
  return [
    check('email', 'Email Invalido')
      .isEmail()
      .normalizeEmail()
      .trim()
      .escape(),
    check('password', 'Password Invalida')
      .trim()
      .escape()
      .isLength({ min: 6 })
  ]
}

const validarEliminarUsuario = () => {
  return [
    check('id', 'Id invalida')
      .isMongoId()
      .trim()
      .escape()
  ]
}

const validarCampos = (req, res, next) => {
  const error = validationResult(req)
  if (!error.isEmpty()) {
    res.status(400).json('Parametros invalidos '+ error)
  }
  next()
}


module.exports = {
  validarAgregarUsuario,
  validarEditarUsuario,
  validarEliminarUsuario,
  validarCampos
}