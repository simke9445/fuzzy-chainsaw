import React from 'react';
import ReactDOM from 'react-dom';
import CardList from './components/card-list';


setTimeout(function() {
    ReactDOM.render(
        <CardList></CardList>,
        document.getElementById('blank')
    )
}, 5000);