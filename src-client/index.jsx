import React from 'react';
import ReactDOM from 'react-dom';
import CardList from './components/card-list';
import io from 'socket.io-client';

var socket = io();

socket.on('volunteer-list-init', function(data) {
    let store = data;
        
    ReactDOM.render(
        <CardList cards={store}></CardList>,
        document.getElementById('blank')
    );
        
    socket.on('volunteer-list-update', function(row) {         
        
        if (row.new_val === null) {
            store = store.filter((x) => x.id != row.old_val.id);    
            console.log("pozzasdasda");
        } else if (row.old_val === null) {
            store.push(row.new_val);
            console.log("pozz");
        } else {
            let objectIndex = store.findIndex((x) => x.id == row.old_val.id);
            store[objectIndex] = row.new_val;
        }
        
        console.log(store);
        ReactDOM.render(
            <CardList cards={store}></CardList>,
            document.getElementById('blank')
        );
    });
});

socket.emit('volunteer-list-init');
