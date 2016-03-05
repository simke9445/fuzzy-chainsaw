var express = require('express');
var router = express.Router();
var assert = require('assert');

/* GET users listing. */
router.get('/', function(req, res, next) {
    r.db(app.locals.config.rethinkdb.db).table('event').run(app.locals.rdbConn, function(err, cursor) {
        assert(err == null, err);
        var data = [];
        cursor.toArray(function(err, data) {
            res.render('index', { title: 'Express', posts: data });
        });
    });
}
