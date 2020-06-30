const mongoose = require('mongoose');

const Category = require('./categoryModel');

module.exports = {
    getAll: (req, res, next) => {
        console.log('GET ALL');
    },
    getCategory: (req, res, next) => {
        console.log('GET ONE');
    },
    addCategory: (req, res, next) => {
        console.log('POST CATEGORY');
    },
    updateCategory: (req, res, next) => {
        console.log('PATCH ONE');
    },
    deleteCategory: (req, res, next) => {
        console.log('DELETE ONE');
    }
}