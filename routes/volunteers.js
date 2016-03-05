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

router.post('/profile', function(req, res, next) {
    console.log(req.body);

    res.render('volunteer-detail');
});

module.exports = router;
