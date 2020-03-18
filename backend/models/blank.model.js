const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const blankSchema = new Schema({
    owner: {type: String, ref: 'User'},
    blankType: {type: Number, required: true, trim: true},
    blankID: {type: Number, required: true, trim: true},
    status: {type: String, required:true, default: "available"}
},
{
    timestamps: true
});

const Blank = mongoose.model('Blank', blankSchema);

module.exports = Blank;