import React from 'react';

class Footer extends React.Component {
    
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div className="row">
                <div className="bottom-border card-bottom">
                    <span className="card-paragraph pull-left"></span>
                    <span className="card-paragraph pull-right">{this.props.skills.join(', ')}</span> 
                </div>
            </div>
        );
    }
    
}

export default Footer;