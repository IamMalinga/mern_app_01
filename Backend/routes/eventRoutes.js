const express = require('express')

// controller functions
const { addEvent , readEvent, readEvents , deleteEvent , readEventsNotAuth } = require('../controllers/eventController')

const router = express.Router()
const requireAuth = require('../middleware/requireAuth')

//POST a event
router.post('/', addEvent)

//GET all event
router.get('/not-auth', readEventsNotAuth )
router.get('/read', requireAuth ,readEvents)

//GET an event
router.get('/:id', readEvent)

//DELETE an event
router.delete('/:id', deleteEvent)

module.exports = router