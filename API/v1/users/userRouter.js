const express = require('express');
const mongoose = require('mongoose');
const bycrypt = require('bcrypt');

const router = express.Router();

const User = require('../users/userModel');

router.post('/signup', (req, res, next) => {
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
});

router.delete('/:userId', (req, res, next) => {
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
});

module.exports = router;