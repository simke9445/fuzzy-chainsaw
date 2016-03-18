import React from 'react';

class Description extends React.Component {
    
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div className="row">
                <p className="lead">{this.props.content}</p>
            </div>
        );
    }
    
}

export default Description;