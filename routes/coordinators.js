var express = require('express');
var router = express.Router();
var r = require('rethinkdb');

/* GET coordinator page. */
router.get('/dashboard/', function(req, res, next) {
  r.db.table('event').run(req.rdbConn, function(err, cursor) {
    assert(err == null, err);
    var data = [];
    cursor.toArray(function(err, data) {
      res.render('coordinator-dashboard', data);
    });
  });
});

module.exports = router;
