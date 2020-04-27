const express = require('express')
const router = express.Router()
const UserController = require('../controllers/userCrontrollers')
const routesMap = require('../routes/routes')
console.log(routesMap)

router.post(routesMap.userSignUp, UserController._sign_up)

router.post(routesMap.userCheckEmail, UserController._check_email)

router.post(routesMap.userLogin, UserController._login)

router.delete('/:userId', UserController._deleteUser)

module.exports = router
