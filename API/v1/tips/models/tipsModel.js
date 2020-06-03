'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TipSchema = new Schema({
    title: {
        type: String,
        required: 'Enter tip title'
    },
    content: {
        type: String,
        required: 'Enter tip content'
    }
});