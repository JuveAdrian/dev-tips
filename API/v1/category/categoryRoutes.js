const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log('GET ALL');
});

router.get('/:categoryId', (req, res, next) => {
    console.log('GET ONE');
});

router.post('/', (req, res, next) => {
    console.log('POST CATEGORY');
});

router.patch('/:categoryId', (req, res, next) => {
    console.log('PATCH ONE');
});

router.delete('/:categoryId', (req, res, next) => {
    console.log('DELETE ONE');
});

module.exports = router;