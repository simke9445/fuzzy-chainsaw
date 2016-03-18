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
            <li className="volunteer-item">
                <div>
                    <Header title={data.title} urgency={data.urgency} location={data.location_name}></Header>
                    <Description content={data.note}></Description>
                    <ProgressBar current={data.available_manpower} max={data.required_manpower}></ProgressBar>
                    <Footer skills={data.general_requirements}></Footer>
                </div>
            </li>
        );
    }
}

export default Card;