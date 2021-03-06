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
        const id = req.params.CategoryId;
        Category.findById(id)
            .select("name _id")
            .exec()
            .then(doc => {
                if(doc) {
                    res.status(200).json({
                        child: doc,
                        request: {
                            type: "GET",
                            description: 'Get all Categories',
                            url: "http://localhost:4000/categories/"
                        }
                    });
                } else {
                    res
                        .status(200)
                        .json({message: "No valid entry found for provided ID"});
                }
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err
                });
            })
    },
    addCategory: (req, res, next) => {
        const category = new Category({
            _id: new mongoose.Types.ObjectId(),
            name: req.body.name
        });
        category
            .save()
            .then(result => {
                console.log(result);
                res.status(201).json({
                    message: 'Create Category successfully',
                    createdCategory: {
                        name: result.name,
                        _id: result._id,
                        request: {
                            type: 'GET',
                            url: "http://localhost:4000/categories"
                        }
                    }
                })
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err,
                })
            });
    },
    updateCategory: (req, res, next) => {
        const id = req.params.categoryId;
        const updateOps = {};
        for (const ops of req.body) {
            updateOps[ops.propName] = ops.value;
        }
        Category.update({ _id : id}, { $set: updateOps })
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'Tip updated',
                request: {
                    type: "GET",
                    url: "http://localhost:4000/category/" + id
                }
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error : err
            });
        });
    },
    deleteCategory: (req, res, next) => {
        const id = req.params.categoryId;
        Category.deleteOne({ _id: id })
        .exec()
        .then( doc => {
            res.status(200).json({
                message: 'Category deleted',
                request: {
                    type: 'GET',
                    url: 'http://localhost:4000/category/' + id,
                    body: { name: 'String' }
                }
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
    }
}