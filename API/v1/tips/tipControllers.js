const mongoose = require('mongoose');

const Tip = require('./tipsModel');


module.exports = {
    getAll: (req, res, next) => {
        Tip.find()
            .select("title content category created _id")
            .exec()
            .then(docs => {
                const response = {
                    info: {
                        count: docs.length
                    },
                    tips: docs.map(doc => {
                        return {
                            title: doc.title,
                            content: doc.content,
                            category: doc.category,
                            created: doc.created,
                            _id: doc._id,
                            request: {
                                type: "GET",
                                url: "http://localhost:4000/tips/" + doc._id
                            }
                        }
                    })
                }
                res.status(200).json(response);
                console.log(response);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err
                });
            });
    },
    getTip: (req, res, next) => {
        const id = req.params.tipId;
        Tip.findById(id)
            .select("title content category created _id")
            .exec()
            .then(doc => {
                if(doc) {
                    res.status(200).json({
                        child: doc,
                        request: {
                            type: "GET",
                            description: 'Get all Tips',
                            url: "http://localhost:4000/tips/"
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
                        created: result.created,
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
        const id = req.params.tipId;
        const updateOps = {};
        for (const ops of req.body) {
            updateOps[ops.propName] = ops.value;
        }
        Tip.update({ _id : id }, { $set: updateOps })
            .exec()
            .then(result => {
                res.status(200).json({
                    message: 'Tip updated',
                    request: {
                        type: "GET",
                        url: 'http://localhost:4000/tips/' + id
                    }
                });
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err
                });
            });
    },
    deleteTip: (req, res, next) => {
        const id = req.params.tipId;
        console.log(req.params);
        console.log({_id: id});
        Tip.deleteOne({_id : id})
            .exec()
            .then(doc => {
                res.status(200).json({
                    message: 'Tip deleted',
                    request: {
                        type: 'POST',
                        url: 'http://localhost:4000/tips/' + id,
                        body: { title: 'String', content: 'String', category: 'String' }
                    }
                })
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error : err
                });
            });
    }
}