var Redux = require('redux');
var assert = require('assert');
var entries = require('./entries');
var actions = require('./volunteer-actions')

var createStore = Redux.createStore;
var combineReducers = Redux.combineReducers;

/**
 * Server only reducer for dispatching actions over socket
 */
function action(state, action) {
    return action;
}

/**
 * Store creation and connection to database
 */
module.exports = function(db, conn) {
    return new Promise(function (resolve, reject) {
        db.table('event').run(conn, function(err, cursor) {
            assert(err == null, err);

            cursor.toArray(function(err, data) {
                
                var reducer = combineReducers({
                    entries,
                    action
                });
                
                var mainPageStore = createStore(reducer, {
                    entries: data,
                    action: null
                });
                
                db.table('event').changes().run(conn, function(err, cursor) {
                    cursor.each(function(err, row) {
                        assert(err == null, err);

                        mainPageStore.dispatch(actions.getAction(row));
                    });
                });
                
                resolve(mainPageStore);
            });
        });
    });
}