/* Sidebar.js */

import React from "react";

import Logo from "./sidebar/Logo";
import Menu from "./sidebar/Menu";

class Sidebar extends React.Component {
    render() {
        return (
            <div>
                <Logo />
                <Menu />
            </div>
        )
    }
}

export default Sidebar;