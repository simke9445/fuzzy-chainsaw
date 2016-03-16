var express = require('express');
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var router = express.Router();
//var CardList = require('../../src-client/card-list.jsx');

/* GET home page. */
router.get('/', function(req, res, next) {
    //var elem = ReactDOMServer.renderToString(
      //  React.createElement(CardList, {})
    //);
    
    //res.render('index', { title: 'Express' });
});

module.exports = router;
