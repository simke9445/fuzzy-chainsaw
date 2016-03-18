import React from 'react';
import classNames from 'classnames';

class Header extends React.Component {
    
    constructor(props) {
        super(props)
    }
    
    renderIcon() {
        let color = ["color", this.props.urgency.toString()].join('-');
        let iconClasses = classNames(
            color,
            "emergency", 
            "glyphicon", 
            "glyphicon-exclamation-sign",
            "card-paragraph",
            "text-center"
        );

        return (
            <span className={iconClasses} aria-hidden="true"/>
        );
    }

    render() {
        return (
            <div className="top-border row">    
                {this.renderIcon()}
                <a className="text-center" href="http://www.google.com">{this.props.title}</a>
                <div className="pull-right">
                    <a href="" className="location-a"><small>@</small>{this.props.location}</a>
                </div>
            </div>
        );
    }
    
}

export default Header;