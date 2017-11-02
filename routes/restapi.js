const express = require('express');
const router = express.Router();
const bootscript = require('./bootscript');

router.post('/save', (req, res) => {
  bootscript.hacketyhack();
  res.send('OK');
});

module.exports = router;
