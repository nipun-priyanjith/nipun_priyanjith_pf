// const mongoose = require('mongoose');

// const ExperienceSchema = new mongoose.Schema({
//   role: {
//     type: String,
//     required: true
//   },
//   company: {
//     type: String,
//     required: true
//   },
//   description: {
//     type: String,
//     required: true
//   },
//   link: {
//     type: String,
//     required: true
//   }
// });

// module.exports = mongoose.model('Experience', ExperienceSchema);


// server/models/Experience.js
const mongoose = require('mongoose');

const ExperienceSchema = new mongoose.Schema({
  role: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Experience', ExperienceSchema);
