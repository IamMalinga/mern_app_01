const express = require('express');
const router = express.Router();

const { addEvent , removeEvent , readSelectedEvents } = require('../controllers/selecteEventController');
const requireAuth = require('../middleware/requireAuth')
router.use(requireAuth)
//add event
router.post('/add', addEvent);

//delete event
router.delete('/delete', removeEvent );

//read events
router.get('/read', readSelectedEvents)

module.exports = router;