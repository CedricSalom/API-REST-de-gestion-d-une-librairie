const mongoose = require('mongoose');

const Schema = mongoose.Schema

const livreSchema = new Schema ({
    numero : {type: Number, required: true, unique: true},
    titre : {type: String, required: true},
    pages : [String]
});

const model = mongoose.model("livre", livreSchema);

module.exports = model;