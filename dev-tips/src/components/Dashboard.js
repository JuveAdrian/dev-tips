/* Dashboard.js */
import React from "react";

import DashboardHeader from "./dashboard/DashboardHeader";
import TipsList from "./dashboard/TipsList";
import Form from "./dashboard/Form";

class Dashboard extends React.Component {
    state = {
        tips: []
    };
    
    delTip = id => {
        console.log(id);
        const tipsArray = this.state.tips;
        const index = tipsArray.findIndex( o => o._id === id);
        fetch("http://localhost:4000/tips/" + id, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(
            this.setState({
                tips: [
                  ...this.state.tips.filter(tips => {
                    return tips._id !== id
                  }),
                ],
              })
        )
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    addTip = (title, content, category) => {
        const data = {title: title, content: content, category: category, created: '123', _id: '123'};
        fetch("http://localhost:4000/tips", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .then(response =>
            this.setState({
                tips: [...this.state.tips, response.data],
              })
        )
        .catch((error) => {
            console.error('Error:', error);
        });
    };
    

    componentDidMount() {
        fetch("http://localhost:4000/tips/")
        .then(response => response.json())
        .then(data => {
            this.setState({ tips: data.tips});
        });
    };

    render() {
        return (
            <div className="dashboardContainer">
                <DashboardHeader />
                <Form addTipProps={this.addTip} />
                <TipsList 
                    tips={this.state.tips} 
                    deleteTipProps={this.delTip}   
                />
            </div>
        )
    }
}

export default Dashboard;