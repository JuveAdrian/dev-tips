const express = require('express');
const mongoose = require('mongoose');
const bycrypt = require('bcrypt');

const router = express.Router();

const userController = require('./userControllers');

router.post('/signup', userController.signup);
router.delete('/:userId', userController.deleteUser);
router.post('/login', userController.login);

module.exports = router;