var express = require('express');
var router = express.Router();
var io = require('socket.io');
var ReactDOMServer = require('react-dom/server');
var React = require('react');
var VolunteerList = require('../../dist/component.bundle.js').VolunteerList;

var localStore = null;
    
/* GET volunteer listing. */
router.get('/', function(req, res, next) {     
    var cardList = ReactDOMServer.renderToString(VolunteerList({
        cards: localStore.getState().entries
    }));
   
    res.render('volunteer-list', {
        mainList: cardList, 
        state: JSON.stringify(localStore.getState().entries)
    });
});

router.post('/signup', function(req, res, next) {
    console.log(req.body);

    var cardList = ReactDOMServer.renderToString(VolunteerList({
        cards: localStore.getState().entries
    }));
   
    res.redirect('/');
});

router.post('/profile', function(req, res, next) {
    console.log(req.body);

    res.render('volunteer-detail');
});

module.exports = function(dataStore) {
    localStore = dataStore;
      
    return router;
}
