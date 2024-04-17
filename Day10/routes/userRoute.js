const express = require('express');
const usersController = require('../controllers/usersController.js');

const userRouter = express.Router();

userRouter.route('/')
    .get(usersController.getUser)
    .post(usersController.addUser)
    .put(usersController.replaceUser)
    .delete(usersController.deleteUser);

module.exports = userRouter;