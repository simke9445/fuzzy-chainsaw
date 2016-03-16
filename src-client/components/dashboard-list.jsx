import React from 'react';
import Dashboard from './dashboard';

class DashboardList extends React.Component {
    
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div>
                {this.props.info.map(x => <Dashboard data={x}></Dashboard>)}   
            </div>
        );
    }
    
}

export default DashboardList;