// server/models/Word.js
const mongoose = require('mongoose');


const WordSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Word', WordSchema);
