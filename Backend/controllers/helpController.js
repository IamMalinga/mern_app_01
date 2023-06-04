const Help = require('../models/helpModel')
const mongoose = require('mongoose');
  
//add an event
  const addHelp = async (req, res) => {
    const user_id = req.user._id;        
    const { email , message } = req.body;
        const event = await Help.create({ user_id, email, message })
        res.status(200).json(event)
    }
    
  const readHelp = async (req,res) => {
    const user_id = req.user._id
    const email = req.body
    const read = await Help.find({ user_id : user_id })
    if(read){
      res.status(200).json(read)
    }
  }

module.exports = { addHelp, readHelp }