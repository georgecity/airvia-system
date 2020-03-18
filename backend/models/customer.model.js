const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const customerSchema = new Schema({
    name: {type: String, required: true, unique: false, trim: true},
    address: {type: String, required: true, unique: false, trim: true},
    email: {type: String, required: true},
    contactNumber: {type: Number, required: true, unique: true, trim: true},
    discounts: [{type: Schema.Types.Mixed, ref: 'Discount', trim: true, default: " ", required: false}],
    payments: [{type: Schema.Types.Mixed, ref: 'Payment', required: false, default: " "}],
    customerStatus: {type: String, required: true, default: "Regular", trim: true, required: false}
},
{
    timestamps: true
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;