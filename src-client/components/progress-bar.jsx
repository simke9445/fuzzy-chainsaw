import React from 'react';

class ProgressBar extends React.Component {
    
    constructor(props) {
        super(props)
    }
    
    render() {
        let progressFullPercent = {
            width: this.props.percent + '%'
        };
        
        return (
            <div className="card-bottom card-paragraph">
                <div className="progress">
                    <div className="progress-bar" role="progressbar" 
                    aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" 
                    style={progressFullPercent}>
                        <span>12/20</span>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default ProgressBar;