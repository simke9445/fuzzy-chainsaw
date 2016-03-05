var assert = require('assert');

module.exports = function(io, app, db) {
    io.on('connection', function(socket) {
        db.table('event').changes().run(app.locals.rdbConn, function(err, cursor) {
            cursor.each(function(err, row) {
                assert(err == null, err);
                
                socket.emit('post_action', row);
            });
        });
    });
};