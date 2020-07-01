const mongoose = require('mongoose');

const Category = require('./categoryModel');

module.exports = {
    getAll: (req, res, next) => {
        Category.find()
            .select()
            .exec()
            .then( docs => {
                const response = {
                    info: {
                        count: docs.length
                    },
                    categories: docs.map(doc => {
                        return {
                            name: doc.name,
                            _id: doc._id,
                            request: {
                                type: "GET",
                                url: "http://localhost:4000/categories/" + doc._id
                            }
                        }
                    })
                }
                res.status(200).json(response);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err
                });
            });
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