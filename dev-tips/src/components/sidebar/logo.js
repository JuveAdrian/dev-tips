import React from 'react';

class Logo extends React.Component {
    render() {
        return (
            <div className="sidebarContainer">
                <h1 style={{ textAlign: "center", fontWeight: "bold", fontSize: "1.5em" }}>&#60;&#47;&#62; DevTips</h1>
                <h6 style={{ textAlign: "center", fontWeight: "bold", fontSize: "0.5em" }}>by Adrian Grabkowski</h6>
            </div>
        )
    }
}

export default Logo;