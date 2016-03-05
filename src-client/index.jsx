import React from 'react';
import ReactDOM from 'react-dom';
import CardList from './components/card-list';
import io from 'socket.io-client';

var socket = io();

socket.on('volunteer-list-init', function(data) {
    console.log(data);
    
    socket.on('volunteer-list-update', function(row) { 
        console.log(row);
        ReactDOM.render(
            <CardList></CardList>,
            document.getElementById('blank')
        );
    });
});

socket.emit('volunteer-list-init');
