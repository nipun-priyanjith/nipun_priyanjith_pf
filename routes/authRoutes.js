// server/routes/authRoutes.js
const express = require('express');
const router = express.Router();
const auth = require('firebase-admin').auth();

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await auth.getUserByEmail(email);
    const token = await auth.createCustomToken(user.uid);
    res.json({ token });
  } catch (err) {
    res.status(400).json({ message: 'Error logging in', error: err.message });
  }
});

module.exports = router;
