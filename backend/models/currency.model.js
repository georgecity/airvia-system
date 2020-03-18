const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const currencySchema = new Schema({
    creator: {type: String, ref: 'User', required: true, trim: true},
    currency: {type: Number, required: true, trim: true},
    date: {type: Date, default: Date.now, expires: 21600},
},
{
    timestamps: true
});

const Currency = mongoose.model('Currency', currencySchema);

module.exports = Currency;