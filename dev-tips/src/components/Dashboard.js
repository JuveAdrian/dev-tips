/* Dashboard.js */

import React from "react";

import DashboardHeader from "./dashboard/DashboardHeader";
import TipsList from "./dashboard/TipsList";

class Dashboard extends React.Component {
    state = {
        tips: []
    }

    componentDidMount() {
        fetch("http://localhost:4000/tips/")
        .then(response => response.json())
        .then(data => {
            this.setState({ tips: data.tips});
        });
    }
    render() {
        console.log(`TEST: ${this.state.tips}`)
        return (
            <div className="dashboardContainer">
                <DashboardHeader />
                <TipsList tips={this.state.tips} />
            </div>
        )
    }
}

export default Dashboard;