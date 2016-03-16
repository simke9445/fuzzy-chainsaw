import React from 'react';

class ProgressBar extends React.Component {
    
    constructor(props) {
        super(props)
    }
    
    render() {
        let progressFullPercent = 100*(this.props.current/this.props.max);
        
        return (
            <div className="row">
                <div className="col-md-9 card-bottom card-paragraph text-center">
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" 
                        aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" 
                        style={{width: progressFullPercent + '%'}}>
                            <span>{this.props.current + '/' + this.props.max}</span>
                        </div>
                    </div>
                </div>
                <div>
                    <button href="#" className="btn btn-xs btn-success text-center" data-toggle='modal' data-target='#basicModal'>Prijavi se!</button>
                </div>
            </div>
        );
    }
    
}

export default ProgressBar;
