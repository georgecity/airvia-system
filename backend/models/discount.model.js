const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const discountSchema = new Schema({
    creator: {type: String, ref: 'User'}, //take into accoutn
    discountName: {type: String, required: true, unique: true},
    discount: {type: Number, required: true, trim: true },
    type: {type: String, required: true, trim: true},
    condition: {type: Number, trim: true, default: " 0 "}
},
{
    timestamps: true
});

const Discount = mongoose.model('Discount', discountSchema);

module.exports = Discount;