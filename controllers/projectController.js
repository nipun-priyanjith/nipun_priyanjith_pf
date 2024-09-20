const Project = require('../models/Project');

// Helper function to handle image data
const handleFileUpload = (files) => {
  return files.map(file => ({
    data: file.buffer,
    contentType: file.mimetype,
    filename: file.originalname,
  }));
};

exports.uploadFiles = async (req, res) => {
  try {
    const fileDataArray = handleFileUpload(req.files);
    const project = await Project.findById(req.body.projectId);

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    project.images = [...project.images, ...fileDataArray]; // Add new images to existing ones

    await project.save();
    res.status(201).json(project);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


















// const Project = require('../models/Project');

// // Helper function to handle image data
// const handleFileUpload = (file) => {
//   if (!file) return null;
//   return {
//     data: file.buffer,
//     contentType: file.mimetype,
//     filename: file.originalname
//   };
// };

// exports.uploadFile = async (req, res) => {
//   try {
//     const fileData = handleFileUpload(req.file);
//     const project = new Project({
//       title: req.body.title || 'Untitled Project',
//       description: req.body.description || 'No Description',
//       technologies: req.body.technologies || 'N/A',
//       link: req.body.link || '',
//       images: [fileData],
//     });

//     await project.save();
//     res.status(201).json(project);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };





// const Project = require('../models/Project');

// // Helper function to handle image data
// const handleImageUpload = (image) => {
//   if (!image) return null;
//   return {
//     data: image.buffer,
//     contentType: image.mimetype
//   };
// };

// exports.createProject = async (req, res) => {
//   try {
//     const images = req.files || [];
//     const project = new Project({
//       title: req.body.title,
//       description: req.body.description,
//       technologies: req.body.technologies,
//       link: req.body.link,
//       images: images.map(handleImageUpload)
//     });

//     await project.save();
//     res.status(201).json(project);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };

// exports.getProjects = async (req, res) => {
//   try {
//     const projects = await Project.find();
//     res.json(projects);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };










// const Project = require('../models/Project');

// // Helper function to handle image data
// const handleImageUpload = (image) => {
//   if (!image) return null;
//   return {
//     data: image.buffer,
//     contentType: image.mimetype
//   };
// };

// exports.createProject = async (req, res) => {
//   try {
//     const { images } = req.files;
//     const project = new Project({
//       ...req.body,
//       images: images.map(handleImageUpload)
//     });
//     await project.save();
//     res.status(201).json(project);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };

// exports.getProjects = async (req, res) => {
//   try {
//     const projects = await Project.find();
//     res.json(projects);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };
