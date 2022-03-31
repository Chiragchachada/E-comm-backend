const express = require('express')
const router = express.Router();
const {signup, login} = require('../Controller/user');
const { authenticate } = require('../Middleware/auth');






router.route("/signup")
        .post(signup)
        

router.route("/login")
        .post(authenticate,login)




module.exports = router
