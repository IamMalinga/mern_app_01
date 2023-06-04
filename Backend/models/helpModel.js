const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const helpSchema = new Schema({
    user_id:{
        type:String,
        required:true
    },
    email: { 
    type: String, 
    required: true 
  },
    message: { 
    type: String,
     required: true 
    },
    reply: { 
      type: String, 
      }
}
,{timestamps:true});

module.exports = mongoose.model('contact', helpSchema);