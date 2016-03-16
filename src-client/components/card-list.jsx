import React from 'react';
import Card from './card';

class CardList extends React.Component {
    
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div className="container"> 
                {this.props.cards.map(x => <Card data={x}></Card>)}   
            </div>
        );
    }
    
}

export default CardList;