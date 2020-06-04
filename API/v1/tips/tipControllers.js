const mongoose = require('mongoose');

const Tip = require('./tipsModel');


module.exports = {
    getAll: (req, res, next) => {
        console.log('getAll');
    },
    getTip: (req, res, next) => {
        console.log('getTip');
    },
    getTipByCategory: (req, res, next) => {
        console.log('getTipByCategory');
    },
    getTipByHash: (req, res, next) => {
        console.log('getTipByHash');
    },
    addTip: (req, res, next) => {
        const tip = new Tip({
            _id: new mongoose.Types.ObjectId(),
            title: req.body.title,
            content: req.body.content,
            category: req.body.category,
            created: Date()
        });
        tip
            .save()
            .then(result => {
                console.log(result);
                res.status(201).json({
                    message: 'Created Tip successfully',
                    createdTip: {
                        title: result.title,
                        content: result.content,
                        category: result.category,
                        created: result.category,
                        _id: result._id,
                        request: {
                            type: 'GET',
                            url: "http://localhost:4000/tips/"
                        }
                    }
                });
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err,
                    info: 'hallo'
                });
            });
    },
    updateTip: (req, res, next) => {
        console.log('updateTip');
    },
    deleteTip: (req, res, next) => {
        console.log('deleteTip');
    }
}