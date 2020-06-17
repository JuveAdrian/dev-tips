const mongoose = require('mongoose');
const User = require('./userModel');
const bycrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    signup: (req, res, next) => {
        User.findOne({ email: req.body.email })
            .exec()
            .then(user => {
                if( user.length >= 1 ) {
                    return res.status(409).json({
                        message: 'Mail exists'
                    });
                } else {
                    bycrypt.hash(req.body.password, 10, (err, hash) => {
                        if(err) {
                            console.log('halo');
                            return res.status(500).json({
                                error: err
                            });
                        } else {
                            const user = new User({
                                _id: new mongoose.Types.ObjectId(),
                                email: req.body.email,
                                password: hash
                        });
                        user
                            .save()
                            .then(result => {
                                res.status(201).json({
                                    message: 'User created'
                                })
                            })
                            .catch(err => {
                                res.status(500).json({
                                    error: err
                                });
                            });
                        }
                    });
                }
            });   
    },
    deleteUser: (req, res, next) => {
        User.deleteOne({_id: req.params.userid})
            .exec()
            .then(result => {
                res.status(200).json({
                    message: 'User deleted'
                })
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err
                });
            });
    },
    login: (req, res, next) => {
        User.find({ email: req.body.email })
            .exec()
            .then(user => {
                if (user.length < 1) {
                    return res.status(401).json({
                        message: 'Auth failed'
                    })
                }
                bycrypt.compare(req.body.password, user[0].password, (err, result) => {
                    if (err) {
                        return res.status(401).json({
                            message: 'Auth failed'                            
                        })
                    }
                    if (result) {
                        const token = jwt.sign(
                        {
                            email: user[0].email,
                            userId: user[0]._id
                        }, 
                        process.env.JWT_KEY, 
                        {
                            expiresIn: "1h"
                        } 
                    );
                        return res.status(200).json({
                            message: 'Auth successful',
                            token: token
                        })
                    }
                    res.status(401).json({
                        message: 'Auth failed'
                    })
                })
            })
            .catch(err => {
                console.log(`dupa ${err}`);
                res.status(500).json({
                    error: err
                });
            })
    }
}