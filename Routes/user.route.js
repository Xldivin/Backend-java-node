const User = require("../Controllers/list.user.controller");
const express = require("express")


const router = express.Router();
router.get('/user',User);

module.exports = router