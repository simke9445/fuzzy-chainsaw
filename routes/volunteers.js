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
    res.render('volunteer-detail');
    var handicaps = Object.keys(req.body).filter(function(key) {
        return key.startsWith("handicap-");
    }).map(function(key) {
        return key.slice(9);
    });

    var languages = Object.keys(req.body).filter(function(key) {
        return key.startsWith("languages-");
    }).map(function(key) {
        return key.slice(10);
    });

    var skill = Object.keys(req.body).filter(function(key) {
        return key.startsWith("skill-");
    }).map(function(key) {
        return key.slice(6);
    });


});

module.exports = router;
