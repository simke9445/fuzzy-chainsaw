var assert = require('assert');

module.exports = function(io, db, conn) {
    io.on('connection', function(socket) {
        socket.on('volunteer-list-init', function() {
            db.table('event').run(conn, function(err, cursor) {
                assert(err == null, err);

                cursor.toArray(function(err, data) {
                    socket.emit('volunteer-list-init', data);

                    db.table('event').changes().run(conn, function(err, cursor) {
                        cursor.each(function(err, row) {
                            assert(err == null, err);

                            socket.emit('volunteer-list-update', row);
                        });
                    });
                });
            });
        });

        socket.on('volunteer-detail-init', function(key) {
            db.table('event').get(key).run(conn, function(err, cursor) {
                assert(err == null, err);
                cursor.next(function(err, data) {
                    socket.emit('volunteer-detail-init', data);

                    db.table('event').get(key).changes().run(conn, function(err, cursor) {
                        cursor.each(function(err, row) {
                            assert(err == null, err);

                            socket.emit('volunteer-detail-update', row);
                        });
                    });
                });
            });
        });
    });
}