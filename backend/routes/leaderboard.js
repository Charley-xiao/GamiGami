// backend/routes/leaderboard.js
const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const leaderboard = await User.find().sort({ xp: -1 }).limit(10);
    res.json(leaderboard);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch leaderboard' });
  }
});

module.exports = router;
