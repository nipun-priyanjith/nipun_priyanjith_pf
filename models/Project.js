const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  technologies: { type: String, required: true },
  link: { type: String, required: true },
  images: [
    {
      data: Buffer,      // Storing image data as binary
      contentType: String // Storing the image MIME type (e.g., 'image/jpeg')
    }
  ]
});

module.exports = mongoose.model('Project', projectSchema);


// const mongoose = require('mongoose');

// const ProjectSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true
//   },
//   images: [{
//     data: Buffer,
//     contentType: String
//   }],
//   description: {
//     type: String,
//     required: true
//   },
//   technologies: [{
//     type: String,
//     required: true
//   }],
//   link: [{
//     type: String,
//     required: true
//   }]
// });

// module.exports = mongoose.model('Project', ProjectSchema);


