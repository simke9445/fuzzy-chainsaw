import React from 'react';

class ProgressBar extends React.Component {
    
    constructor(props) {
        super(props)
    }
    
    render() {
        let progressFullPercent = 100*(this.props.current/this.props.max);
        
        return (
            <div className="row">
                <div className="col-md-1">
                    <div id="progressString">
                        <span>{this.props.current + '/' + this.props.max}</span>
                    </div>
                </div>
                <div className="col-md-8 card-bottom card-paragraph text-center">
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" 
                        aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" 
                        style={{width: progressFullPercent + '%'}}>
                        </div>
                    </div>
                </div>
                <div className="col-md-2">
                    <button href="#" className="btn btn-xs btn-success text-center" data-toggle='modal' data-target='#basicModal'>Prijavi se!</button>
                </div>
            </div>
        );
    }
    
}

export default ProgressBar;
