const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const selectedEventSchema = new Schema({
    email:{
        type: String,
        required: true
    },
    event:{
        type: String,
        required: true
    },
    user_id:{
        type: String,
        required: true
    }
},{timestamps:true}) 


module.exports = mongoose.model('selectedEvent',selectedEventSchema);
