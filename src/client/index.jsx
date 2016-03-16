import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import io from 'socket.io-client';
import entries from '../realtime/entries';
import CardList from '../components/card-list';

var socket = io();

var dataStore = createStore(entries, window._INITIAL_STATE);

dataStore.subscribe(function() {
    ReactDOM.render(
        <CardList cards={dataStore.getState()}></CardList>,
        document.getElementById('cardList')
    );
});

socket.on('volunteer-list-update', function(action) {
    dataStore.dispatch(action);
});
