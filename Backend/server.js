const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require ('./routes/userRoutes')
const eventRoutes = require('./routes/eventRoutes')
const selectedEventsRoutes = require('./routes/selectedEventsRoutes');
const helpRoutes = require('./routes/helpRoutes');
require('dotenv').config();

const App = express();

App.use(express.json());

App.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
  })
  

//routes
App.use('/api/users',userRoutes);
App.use('/api/events',eventRoutes);
App.use('/api/selectedevents',selectedEventsRoutes);
App.use('/api/contacts', helpRoutes);

//database connection
mongoose.connect(process.env.DB_URI).then(() => {
    console.log('database connection established');
    App.listen(process.env.PORT,() => {
        console.log('backend listen on port ' + process.env.PORT);
    })
}).catch((error) => console.log('error: ' + error));
