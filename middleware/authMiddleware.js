// server/middleware/authMiddleware.js
const { auth } = require('firebase-admin');
const admin = require('../config/firebaseAdmin'); // Create this file for Firebase Admin setup

const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = await auth().verifyIdToken(token);
    req.user = decodedToken;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Unauthorized' });
  }
};

module.exports = verifyToken;
