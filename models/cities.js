const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create Schema
const CitiesSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    country: {

        type: String,
        required: true
    }


});

module.exports = city = mongoose.model('cities', CitiesSchema);