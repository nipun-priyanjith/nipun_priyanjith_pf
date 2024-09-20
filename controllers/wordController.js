const Word = require('../models/Word');

// Create a new word
exports.createWord = async (req, res) => {
  try {
    const newWord = new Word(req.body);
    const savedWord = await newWord.save();
    res.status(201).json(savedWord);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all words
exports.getWords = async (req, res) => {
  try {
    const words = await Word.find();
    res.status(200).json(words);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Other CRUD operations...
