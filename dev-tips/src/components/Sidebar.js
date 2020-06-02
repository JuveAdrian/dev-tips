/* Sidebar.js */

import React from "react";

class Sidebar extends React.Component {
    render() {
        return (
            <div className="sidebarContainer">
                <h1 style={{ fontWeight: "bold", fontSize: "1.5em", paddingLeft: "15%", marginTop: "20px" }}>&#60;&#47;&#62; DevTips</h1>
                <span style={{ fontWeight: "bold", fontSize: "0.5em", paddingLeft: "15%"}}>by Adrian Grabkowski</span>
            </div>
        )
    }
}

export default Sidebar;