const express = require('express');
const router = express.Router();
const multer = require('multer');
const projectController = require('../controllers/projectController');

// Configure multer for multiple file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/uploadfiles', upload.array('myFiles', 10), projectController.uploadFiles);

module.exports = router;













// const express = require('express');
// const router = express.Router();
// const multer = require('multer');
// const projectController = require('../controllers/projectController');

// // Configure multer for file uploads
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

// router.post('/uploadfile', upload.single('myFile'), projectController.uploadFile);

// module.exports = router;





// const express = require('express');
// const router = express.Router();
// const multer = require('multer');

// const upload = multer({ storage: multer.memoryStorage() });
// const projectController = require('../controllers/projectController');

// router.post('/', upload.array('images'), projectController.createProject);
// router.get('/', projectController.getProjects);

// module.exports = router;









// const express = require('express');
// const router = express.Router();
// const multer = require('multer');
// const upload = multer({ storage: multer.memoryStorage() });
// const projectController = require('../controllers/projectController');

// router.post('/projects', upload.array('images'), projectController.createProject);
// router.get('/projects', projectController.getProjects);

// module.exports = router;
