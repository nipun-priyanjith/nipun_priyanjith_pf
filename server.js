
// server/server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors'); // Import cors
const connectDB = require('./config/db');
const wordRoutes = require('./routes/wordRoutes');
const authRoutes = require('./routes/authRoutes');
const experienceRoutes = require('./routes/experienceRoutes');
const projectRoutes = require('./routes/projectRoutes');
const multer = require('multer');
const fs = require('fs');
const Project = require('./models/Project');

const app = express();


//UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU

// Connect to MongoDB
connectDB();

// Middleware
// app.use(cors()); // Enable CORS for all requests
// Middleware
app.use(cors());
app.use(express.json()); // For parsing application/json

// Routes
app.use('/api', (req, res, next) => {
    console.log("User entered word"); // Print message when a request is made to /api
    
    // Log useful details of the request
    console.log(`Request URL: ${req.url}`);
    console.log(`Request Method: ${req.method}`);
    console.log(`Request Headers: ${JSON.stringify(req.headers)}`);
    console.log(`Request Body: ${JSON.stringify(req.body)}`);
    
    next(); // Pass the request to the next middleware/route handler
}, wordRoutes);

app.use('/api/auth', authRoutes);


// app.use('/api/experiences', (req, res, next) => {
//     console.log("User entered experienceRoutes data"); // Print message when a request is made to /api/experiences
    
//     // Log useful details of the request
//     console.log(`Request URL: ${req.url}`);
//     console.log(`Request Method: ${req.method}`);
//     console.log(`Request Headers: ${JSON.stringify(req.headers)}`);
//     console.log(`Request Body: ${JSON.stringify(req.body)}`);
    
//     next(); // Pass the request to the next middleware/route handler
// }, experienceRoutes);

app.use('/api/experiences', (req, res, next) => {
    console.log("User entered experienceRoutes data"); // Print message when a request is made to /api/experiences
    
    // Log useful details of the request
    console.log(`Request URL: ${req.url}`);
    console.log(`Request Method: ${req.method}`);
    console.log(`Request Headers: ${JSON.stringify(req.headers)}`);
    console.log(`Request Body: ${JSON.stringify(req.body)}`);
    
    next(); // Pass the request to the next middleware/route handler
}, experienceRoutes);






// Middleware
app.use(cors());
app.use(express.json());





// Setup Multer for file uploads (storing files in memory)
const storage = multer.memoryStorage();
const upload = multer({ 
  storage, 
  limits: { fileSize: 5 * 1024 * 1024 }, // Limit file size to 5MB
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true);
    } else {
      cb(new Error('Only .jpeg or .png images are allowed'), false);
    }
  }
});

// Route to Upload Files (Images)
app.post('/api/projects/uploadfiles', upload.array('myFiles'), async (req, res) => {
  try {
    const { title, description, technologies, link, projectId } = req.body;
    const images = req.files.map(file => ({
      data: file.buffer,
      contentType: file.mimetype,
    }));

    if (projectId) {
      // Update existing project
      const project = await Project.findById(projectId);
      if (project) {
        project.images.push(...images);
        await project.save();
        return res.status(200).json({ message: 'Images added to existing project' });
      } else {
        return res.status(404).json({ message: 'Project not found' });
      }
    } else {
      // Create new project
      const newProject = new Project({
        title,
        description,
        technologies,
        link,
        images,
      });
      await newProject.save();
      return res.status(201).json({ message: 'New project created with images' });
    }
  } catch (error) {
    console.error('Error uploading files:', error);
    return res.status(500).json({ message: 'Error uploading files', error });
  }
});

// Route to Fetch Projects with Images
// app.get('/api/projects', async (req, res) => {
//   try {
//     const projects = await Project.find({});
//     res.json(projects);
//   } catch (error) {
//     console.error('Error fetching projects:', error);
//     res.status(500).json({ message: 'Error fetching projects', error });
//   }
// });

// server/server.js
app.get('/api/projects', async (req, res) => {
  try {
    const projects = await Project.find({});
    // Convert image data to Base64
    const projectsWithBase64Images = projects.map(project => ({
      ...project.toObject(),
      images: project.images.map(image => ({
        data: image.data.toString('base64'),
        contentType: image.contentType
      }))
    }));
    res.json(projectsWithBase64Images);
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ message: 'Error fetching projects', error });
  }
});












const PORT = process.env.PORT ;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



