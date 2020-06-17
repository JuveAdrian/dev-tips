const express = require('express');

const router = express.Router();

const userController = require('./userControllers');

router.post('/signup', userController.signup);
router.delete('/:userId', userController.deleteUser);
router.post('/login', userController.login);

module.exports = router;