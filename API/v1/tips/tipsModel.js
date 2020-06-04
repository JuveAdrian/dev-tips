const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TipSchema = new Schema({
    _id: mongoose.Types.ObjectId,
    title: { type: String, required: true },
    content: { type: String, required: true },
    category: { type: String, required: true },
    /* hashTag: {[ type: String ]}, */
    created: { type: Date, required: true }
});

module.exports = mongoose.model('Tip', TipSchema);