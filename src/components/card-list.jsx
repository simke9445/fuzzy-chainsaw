import React from 'react';
import Card from './card';

class CardList extends React.Component {
    
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <ul> 
                {this.props.cards.map(x => <Card data={x}></Card>)}   
            </ul>
        );
    }
    
}

export default CardList;