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
        let data = this.props.data;
        return (
            <div className="row card col-md-6 col-md-offset-3">
                <Header title={data.title}></Header>
                <Description content={data.note}></Description>
                <ProgressBar current={data.available_manpower} max={data.required_manpower}></ProgressBar>
                <Footer location={data.location_name} skills={data.general_requirements}></Footer>
            </div>
        );
    }
}

export default Card;