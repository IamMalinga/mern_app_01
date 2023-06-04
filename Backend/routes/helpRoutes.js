const express = require('express')

// controller functions
const { addHelp,readHelp } = require('../controllers/helpController')

const router = express.Router()
const requireAuth = require('../middleware/requireAuth');


//POST a event
router.post('/',requireAuth, addHelp)
router.get('/read',requireAuth,readHelp)

module.exports = router