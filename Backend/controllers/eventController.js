const Event = require('../models/eventModel')
const mongoose = require('mongoose');
const User = require('../models/userModel');
  
//add an event
  const addEvent = async (req, res) => {        
    const { image , title ,price_1,price_2,price_3,dec, acYear , details } = req.body;
        const event = await Event.create({ image , title ,price_1,price_2,price_3,dec, acYear , details })
        res.status(200).json(event)
    }     

  //read a post
  const readEvent = async (req, res) => {
    const id = req.params.id;
    const event = await Event.findById(id)
    res.status(200).json(event);
} 

  //read all posts
const readEventsNotAuth = async (req, res) =>{
        const events = await Event.find().sort({createdAt: -1})
        res.status(200).json(events)
}
  
const readEvents = async (req, res) => {
    const user_id = req.user._id;
    const details = await User.findById(user_id); 
    if(!req.user){
    const events = await Event.find().sort({createdAt: -1})
        res.status(200).json(events)
    }else{
        if(details.isFinalYear){
        const events = await Event.find({acYear:"Final"}).sort({createdAt: -1})
        res.status(200).json(events)
      }else{const events = await Event.find().sort({createdAt: -1})
      res.status(200).json(events)}

    }
}

  //delete a post
const deleteEvent = async (req, res) => {
        const { id } = req.params
        if (!mongoose.Types.ObjectId.isValid(id)) {
          return res.status(404).json({error: 'No such event'})
        }
        const event = await Event.findOneAndDelete({_id: id})
        if (!event) {
          return res.status(400).json({error: 'No such event'})
        }
        res.status(200).json(event)
}


module.exports = { addEvent , readEvent , readEvents , deleteEvent ,readEventsNotAuth }