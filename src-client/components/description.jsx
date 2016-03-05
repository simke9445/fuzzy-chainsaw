import React from 'react';

class Description extends React.Component {
    
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div>
                <p className="card-paragraph">{this.props.content}</p>
            </div>
        );
    }
    
}

export default Description;