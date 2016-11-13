const express = require('express');
const router = express.Router()
const controller = require('../controller/color.controller')

router.get('/color', controller.changeColor)


module.exports = router
