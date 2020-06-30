const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CategorySchama = new Schema({
    _id: mongoose.Types.ObjectId,
    name: { type: String, required: true }
});

module.exports = mongoose.model('Category', CategorySchama);