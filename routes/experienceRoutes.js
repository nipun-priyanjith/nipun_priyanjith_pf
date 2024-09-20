// const express = require('express');
// const Expi = require('../models/Experience');
// const router = express.Router();
// const experienceController = require('../controllers/experienceController');
// const verifyToken = require('../middleware/authMiddleware');

// router.post('/experiences', experienceController.createExperience);
// router.get('/experiences', experienceController.getExperiences);

// module.exports = router;


// server/routes/experienceRoutes.js
const express = require('express');
const router = express.Router();
const experienceController = require('../controllers/experienceController');

// Route to create a new experience
router.post('/', experienceController.createExperience);

// Route to get all experiences
router.get('/', experienceController.getExperiences);

module.exports = router;
