import React from 'react';

class Footer extends React.Component {
    
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div className="bottom-border card-bottom">
                <div>
                    <span className="card-paragraph pull-left"></span>
                        <a href="zzzz" className="location-a">{this.props.location}</a>
                    <span className="card-paragraph pull-right">ikonice</span> 
                </div>
            </div>
        );
    }
    
}

export default Footer;