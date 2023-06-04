const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  title: { 
    type: String, 
    required: true 
  },
  details: { 
    type: String,
     required: true 
    },
  price_1:{
    type: String,
  },
  price_2:{
    type: String,
  },
  price_3:{
    type: String,
  },
  dec : {
    type: String,
  }
  ,
  image: { 
    type: String, 
    required: true 
  },
  acYear: {
    type: String,
    required:true
  }
}
,{timestamps:true});

module.exports = mongoose.model('events', eventSchema);