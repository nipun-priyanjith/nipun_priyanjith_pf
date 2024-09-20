// server/routes/wordRoutes.js
const express = require('express');
const router = express.Router();
const Word = require('../models/Word');
const verifyToken = require('../middleware/authMiddleware');

// Get all words
router.get('/words', async (req, res) => {
  try {
    const words = await Word.find();
    res.json(words);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new word
router.post('/words', async (req, res) => {
  const word = new Word({
    text: req.body.text
  });

  try {
    const newWord = await word.save();
    res.status(201).json(newWord);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
