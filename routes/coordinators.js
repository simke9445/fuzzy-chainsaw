var express = require('express');
var router = express.Router();

/* GET coordinator page. */
router.get('/coordinator/dashboard/', function(req, res, next) {
  res.render('coordinator-dashboard');
});

module.exports = router;