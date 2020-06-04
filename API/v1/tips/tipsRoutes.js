const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

const tipControllers = require('./tipControllers');
const Tip = require('./tipsModel');

/* --- TIPS ROUTES --- */

router.get('/', tipControllers.getAll);

router.get('/:tipId', tipControllers.getTip);

router.get('/:tipCategory', tipControllers.getTipByCategory);

router.get('/:tipHash', tipControllers.getTipByHash);

router.post('/', tipControllers.addTip);

router.patch('/:childId', tipControllers.updateTip);

router.delete('/:childId', tipControllers.deleteTip);

module.exports = router;