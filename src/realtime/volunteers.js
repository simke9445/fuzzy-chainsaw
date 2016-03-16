module.exports = function(io, store) {
    io.on('connection', function(socket) {
        store.subscribe(function() {
            socket.emit('volunteer-list-update', store.getState().action);
        });
    });
}