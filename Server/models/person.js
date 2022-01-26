const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

var infractionSchema = new Schema({
    offence:  {
        type: String,
        required: true
    },
    price:  {
        type: Currency,
        min: 0 ,
        required: true
    },
    paid:  {
        type: String,
        required: true
    },

} ,{
    timestamps: true
});

var personSchema = new Schema({
    cin: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
        
    },
    surname: {
        type: String,
        required: true
    },

    birthdate: {
        type: String,
        required: false
    },
    address: {
        type: String,
        required: false
    },

    infractions:[infractionSchema]

},{ 

    timestamps: true
});

var persons = mongoose.model('person', personSchema);

module.exports = persons;