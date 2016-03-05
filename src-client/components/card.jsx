import React from 'react';
import Header from './header';
import Description from './description';
import ProgressBar from './progress-bar';
import Footer from './footer';

class Card extends React.Component {
    
    constructor(props) {
        super(props)
    }
    
    render() {
        let lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo facilis soluta corporis ut amet voluptates, possimus praesentium! Amet blanditiis delectus molestias expedita laborum veniam est, et, aspernatur, distinctio animi officia.";
        return (
            <div className="row card col-md-6 col-md-offset-3">
                <Header title={"React"} ></Header>
                <Description content={lorem}></Description>
                <ProgressBar percent={60}></ProgressBar>
                <Footer location={"Beli Dvor"}></Footer>
            </div>
        );
    }
    
}

export default Card;