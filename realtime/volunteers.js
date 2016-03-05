var assert = require('assert');

module.exports = function(io, db) {
    io.on('connection', function(socket) {
        socket.on('volunteer-list-init', function() {
            db.table('event').run(req.rdbConn, function(err, cursor) {
                assert(err == null, err);
                var data = [];
                cursor.toArray(function(err, data) {
                    socket.emit('volunteer-list-init', data);

                    db.table('event').changes().run(req.rdbConn, function(err, cursor) {
                        cursor.each(function(err, row) {
                            assert(err == null, err);

                            socket.emit('volunteer-list-update', row);
                        });
                    });
                });
            });
        });
    });
}