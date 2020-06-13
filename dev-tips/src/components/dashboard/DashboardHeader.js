import React from "react";

class DashboardHeader extends React.Component {
    render () {
        return (
            <div className="dashboardHeaderContainer">
                <h1>Dashboard Header</h1>
                <p>Count: {this.props.length}</p>
            </div>
        )
    }
}

export default DashboardHeader;