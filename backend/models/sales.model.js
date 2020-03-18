const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const salesSchema = new Schema({
    ticketAmount: {  type: Number,trim:true,  required: true },
    blankID: {type: Schema.Types.ObjectId, ref: 'Blank'},
    coupons: [{type: String, required: true, trim: true, default: " "}], //auditor coupons
    date: {type: Date, required: true, trim: true, default: Date.now},
    method: { type: String,required: true,trim: true},
    currency: {type: Schema.Types.ObjectId, ref: 'Currency', required: true, trim: true},
    comission: {type: Schema.Types.ObjectId, ref: 'Commission', required: true },
    customer: {type: String, ref: 'Customer', required: true, trim: true},
    discount: {type: Number, ref: 'Discount'},
    payment: {type: Schema.Types.ObjectId, ref: 'Payment', required: true },
    advisor: {type: Schema.Types.ObjectId, ref: 'User'},
    totalPrice: {type: Number, required: true, trim: true}
},
{
    timestamps: true
});

const Sales = mongoose.model('Sales', salesSchema);

module.exports = Sales;

