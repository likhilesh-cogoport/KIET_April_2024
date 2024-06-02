const express = require("express");
const { signup } = require("../controllers/authController");
const authRouter = express.Router();

authRouter.route('/signup')
    .post(signup)

module.exports = authRouter;