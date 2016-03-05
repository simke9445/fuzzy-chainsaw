import React from 'react';

class ProgressBar extends React.Component {
    
    constructor(props) {
        super(props)
    }
    
    render() {
        let progressFullPercent = 100*(this.props.current/this.props.max);
        console.log(progressFullPercent);
        return (
            <div className="card-bottom card-paragraph">
                <div className="progress">
                    <div className="progress-bar" role="progressbar" 
                    aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" 
                    style={{width: progressFullPercent + '%'}}>
                        <span>{this.props.current + '/' + this.props.max}</span>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default ProgressBar;
