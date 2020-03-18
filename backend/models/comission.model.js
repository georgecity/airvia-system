const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const comissionSchema = new Schema({
    creator: {type: String, ref: 'User'}, //take into account
    comission: {type: Number },
},
{
    timestamps: true
});

const Comission = mongoose.model('Comission', comissionSchema);

module.exports = Comission;

 