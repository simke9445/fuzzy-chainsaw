var express = require('express');
var router = express.Router();

/* GET coordinator page. */
router.get('/dashboard/', function(req, res, next) {
  res.render('admin-dashboard');
});

module.exports = router;
