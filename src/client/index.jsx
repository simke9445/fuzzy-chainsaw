import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import io from 'socket.io-client';
import entries from '../realtime/entries';
import { VolunteerList } from '../components/component-exports';

var socket = io();

var dataStore = createStore(entries, window._INITIAL_STATE);

dataStore.subscribe(function() {
    ReactDOM.render(
        VolunteerList({ cards: dataStore.getState()}),
        document.getElementById('cardList')
    );
});

socket.on('volunteer-list-update', function(action) {
    dataStore.dispatch(action);
});
