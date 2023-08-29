const express = require('express');
const router = express.Router();

router.get('/profile', (req, res) => {
  res.render('profile', { user: userData });
});

module.exports = router;