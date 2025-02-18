const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        maxlength: 25
    },
    address: {
        type: String,
        required: true
    },
    contactNumber: {
        type: Number,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        default: "advisor" //3 roles admin, manager and advisor
    },
},
{
    timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;