const express = require('express');
const mongoose = require('mongoose');
const bycrypt = require('bcrypt');

const router = express.Router();

const userController = require('./userControllers');
const User = require('../users/userModel');

router.post('/signup', userController.signup);

router.delete('/:userId', userController.deleteUser);

module.exports = router;