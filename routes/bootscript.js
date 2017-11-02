const express = require('express');
const router = express.Router();

var flop = false;

router.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain')

  if (flop) {
    res.render('bootscript-actual', {
      imageserver: '192.168.1.10',
      layout: false
    });
  } else {
    res.render('bootscript-provision', {
      imageserver: '192.168.1.10',
      provision_baseurl: 'http://192.168.1.10:3000/',
      layout: false
    });
  }
});

module.exports = router;

module.exports.hacketyhack = function() {
  flop = true;
}
