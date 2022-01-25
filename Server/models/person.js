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
        type: Boolean,
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

    nationality: {
        type: String,
        required: true
    },
    dateExperation: {
        type: String,
        required: true
    },

    infractions:[infractionSchema]

},{ 

    timestamps: true
});

var Dishes = mongoose.model('Dish', personSchema);

module.exports = Dishes;