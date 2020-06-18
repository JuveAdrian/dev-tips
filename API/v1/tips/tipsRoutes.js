const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

const checkAuth = require('../middleware/check-auth');
const tipControllers = require('./tipControllers');
const Tip = require('./tipsModel');

/* --- TIPS ROUTES --- */

router.get('/', tipControllers.getAll);

router.get('/:tipId', tipControllers.getTip);

router.get('/:tipCategory', tipControllers.getTipByCategory);

router.get('/:tipHash', tipControllers.getTipByHash);

router.post('/', checkAuth, tipControllers.addTip);

router.patch('/:tipId', checkAuth, tipControllers.updateTip);

router.delete('/:tipId', checkAuth, tipControllers.deleteTip);

module.exports = router;