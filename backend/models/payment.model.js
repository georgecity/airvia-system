const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const paymentSchema = new Schema({
    customer: {type: String, ref: 'Customer'}, //take into accoutn
    cardNumber: {type: Number, required: true },
    cvv: {type: Number, required: true, maxlength: 3},
    expiryDate: {type: Date, required: true},
    billingAddress: { type: String, required: true},
    nameOnCard: { type: String, required: true}
},
{
    timestamps: true
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;

