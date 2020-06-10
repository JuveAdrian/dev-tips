/* Dashboard.js */

import React from "react";

import DashboardHeader from "./dashboard/DashboardHeader";
import TipsList from "./dashboard/TipsList";
import Form from "./dashboard/Form";

class Dashboard extends React.Component {
    state = {
        tips: []
    }
    delTip = id => {
        console.log('delete', id);
    }
    

    componentDidMount() {
        fetch("http://localhost:4000/tips/")
        .then(response => response.json())
        .then(data => {
            this.setState({ tips: data.tips});
        });
    }
    render() {
        return (
            <div className="dashboardContainer">
                <DashboardHeader />
                <Form />
                <TipsList 
                    tips={this.state.tips} 
                    deleteTipProps={this.delTip}   
                />
            </div>
        )
    }
}

export default Dashboard;