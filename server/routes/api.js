const express = require('express');
const router = express.Router();
const Event = require('../models/Event');

// Define your API routes here
router.get('/events', async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Add more routes as needed

module.exports = router;
