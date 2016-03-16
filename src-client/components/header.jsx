import React from 'react';

class Header extends React.Component {
    
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div>    
                <span className="emergency glyphicon glyphicon-exclamation-sign pull-left card-paragraph" 
                aria-hidden="true"></span>
                <div>
                    <h4>
                        <a className="text-center" href="http://www.google.com">{this.props.title}</a>
                    </h4>  
                </div>
            </div>
        );
    }
    
}

export default Header;