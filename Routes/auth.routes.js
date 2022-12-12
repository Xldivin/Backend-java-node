const Login = require("../Controllers/login.controller");
const Signup = require("../Controllers/signup.controller")
const express = require("express")


const router = express.Router();
router.post('/login',Login);
router.post('/signup',Signup);

module.exports = router
