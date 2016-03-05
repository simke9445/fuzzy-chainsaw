var express = require('express');
var router = express.Router();
var assert = require('assert');
var r = require('rethinkdb');
var config = require('../config');
var io = require('socket.io');

/* GET volunteer listing. */
router.get('/', function(req, res, next) {
    res.render('volunteer-list');
});

router.post('/signup', function(req, res, next) {

});

module.exports = router;
