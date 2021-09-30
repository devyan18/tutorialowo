const router = require('express').Router()
const {loginController} = require('../controllers/login.controllers')

router.post('/', loginController)

module.exports = router