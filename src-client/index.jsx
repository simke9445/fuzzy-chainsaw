import React from 'react';
import ReactDOM from 'react-dom';
import CardList from './components/card-list';
import io from 'socket.io-client';

var socket = io();

socket.emit('zzzz');

setTimeout(function() {
    ReactDOM.render(
        <CardList></CardList>,
        document.getElementById('blank')
    )
}, 5000);