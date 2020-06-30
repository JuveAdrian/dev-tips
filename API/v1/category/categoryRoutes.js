const express = require('express');

const router = express.Router();

const categoryControllers = require('./categoryControllers');

router.get('/', categoryControllers.getAll);

router.get('/:categoryId', categoryControllers.getCategory);

router.post('/', categoryControllers.addCategory);

router.patch('/:categoryId', categoryControllers.updateCategory);

router.delete('/:categoryId', categoryControllers.deleteCategory);

module.exports = router;