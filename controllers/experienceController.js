// const Experience = require('../models/Experience');

// exports.createExperience = async (req, res) => {
//   try {
//     const experience = new Experience(req.body);
//     await experience.save();
//     res.status(201).json(experience);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };

// exports.getExperiences = async (req, res) => {
//   try {
//     const experiences = await Experience.find();
//     res.json(experiences);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };


// server/controllers/experienceController.js
const Experience = require('../models/Experience');

exports.createExperience = async (req, res) => {
  try {
    console.log('Request Body:', req.body); // Log the request body
    const experience = new Experience(req.body);
    const savedExperience = await experience.save();
    console.log('Saved Experience:', savedExperience); // Log the saved experience
    res.status(201).json(savedExperience);
  } catch (err) {
    console.error('Error:', err); // Log any errors
    res.status(400).json({ message: err.message });
  }
};

exports.getExperiences = async (req, res) => {
  try {
    const experiences = await Experience.find();
    res.json(experiences);
  } catch (err) {
    console.error('Error:', err); // Log any errors
    res.status(500).json({ message: err.message });
  }
};
