import React from 'react';
import ReactDOM from 'react-dom';
import CardList from './components/card-list';
import io from 'socket.io-client';

var socket = io();

socket.on('post_action', function(row) { 
    console.log(row);
    ReactDOM.render(
        <CardList></CardList>,
        document.getElementById('blank')
    );
});