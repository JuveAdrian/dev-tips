const express = require('express');
const mongoose = require('mongoose');
const bycrypt = require('bcrypt');

const router = express.Router();

const User = require('../users/userModel');

router.post('/singup', (req, res, next) => {
    const user = new User({
        bycrypt.hash(req.body.email, 10, (err, hash) => {
            if(err) {
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
                    console.log(err);
                    res.status(500).json({
                        error: err
                    });
                });
            }
        })
    });
});

module.exports = router;