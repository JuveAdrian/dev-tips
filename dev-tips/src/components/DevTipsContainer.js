import React from "react";

import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import Form from "./dashboard/Form";

class DevTipsContainer extends React.Component {
    render() {
        return (
            <div className="container">    
                <Sidebar />
                <Dashboard />
                <Form />
            </div>
        )
    }
}

export default DevTipsContainer;