var r = require('rethinkdb');
var config = require('../config');

module.exports = {
    createConnection: function(req, res, next) {
        r.connect(config.rethinkdb[process.env.NODE_ENV]).then(function(conn) {
            req.rdbConn = conn;
            next();
        });
    },
    closeConnection: function(req, res, next) {
        req.rdbConn.close();
        next();
    }
};