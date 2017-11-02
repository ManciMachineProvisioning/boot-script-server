const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', {
    title: 'Machine Provisioning',
    manufacturer: req.query.manufacturer || 'DELL',
    product: req.query.product || 'XPS 13',
    serial: req.query.serial || 'AAAAAA-AAAAAA',

    fullname: 'Petike',
    email: 'petike@manci.com'
  });
});

module.exports = router;
