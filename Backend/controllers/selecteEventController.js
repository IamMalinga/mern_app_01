const selectedEvent = require('../models/selectedEventModel');
const mongoose = require('mongoose');

//POST event
const addEvent = async (req,res) => {
    const user_id = req.user._id;
    const { email , event } = req.body;
    const isExist = await selectedEvent.findOne({email,event,user_id});
    if(isExist) {
        res.status(400).json('Event already exists')
    }else{
    const myEvent = await selectedEvent.create({email,event,user_id})
    res.status(200).json(myEvent);
    }
}

//DELETE event
const removeEvent = async (req, res) => {
  const user_id = req.user._id;
  const { user_email, event_title } = req.body;
  console.log("Delete: " + event_title);
  console.log("User email: " + user_email);
  const removeItem = await selectedEvent.findOneAndDelete({email: user_email, event:event_title , user_id:user_id});
  try {
    
    
    if (removeItem) {
      const newList = await selectedEvent.find({ user_id }).sort({ createdAt: -1 });
      res.status(200).json(newList);
    } else {
      res.status(404).json({ message: 'Item not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


//GET events
const readSelectedEvents = async (req,res) => {
    const user_id = req.user._id
    const selectedEvents = await selectedEvent.find({user_id}).sort({createdAt: -1})
    res.status(200).json(selectedEvents);
}

module.exports = { addEvent ,  removeEvent , readSelectedEvents }