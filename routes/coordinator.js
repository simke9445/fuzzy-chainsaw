var express = require('express');
var router = express.Router();

/* GET coordinator page. */
router.get('/', function(req, res, next) {
  res.render('coordinator');
});

module.exports = router;
