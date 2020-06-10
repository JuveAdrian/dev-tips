import React from "react";

import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";

class DevTipsContainer extends React.Component {
    render() {
        return (
            <div className="container">    
                <Sidebar />
                <Dashboard />
            </div>
        )
    }
}

export default DevTipsContainer;