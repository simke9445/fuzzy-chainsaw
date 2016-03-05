import React from 'react';
import Card from './card';

class CardList extends React.Component {
    
    constructor(props) {
        super(props)
    }
    
    render() {
        var num = [1, 2, 3, 4];
        
        return (
            <div>
                {num.map(x => <Card></Card>)}   
            </div>
        );
    }
    
}

export default CardList;