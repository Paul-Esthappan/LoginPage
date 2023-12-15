const express = require('express')
const router = express.Router();
const { postCreateDetails, loginuser, getIdDetails } = require('../controllers/authController');
const { verifyTokenandAuthorization } = require('../token/verifyToken');

//CREATE USER
router.post('/signup',postCreateDetails)
//SIGN IN
router.post('/signin', loginuser)
//GETUSER
router.get('/user/:id',verifyTokenandAuthorization,getIdDetails)



module.exports = router
