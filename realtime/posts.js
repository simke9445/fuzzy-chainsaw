var r = require('rethinkdb');
var assert = require('assert');

module.exports = function(io, app) {
    io.on('connection', function(socket) {
        r.db(app.locals.config.rethinkdb.db).table('event').changes().run(app.locals.rdbConn, function(err, cursor) {
            cursor.each(function(err, row) {
                assert(err == null, err);

                socket.emit('posts', row);
            });
        });
    });
};