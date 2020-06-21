import React from 'react';

class Menu extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container sidebarContainer">
                    <div className="navbar-header">
                        <ul className="nav navbar-nav">
                            <li><a href="">Home</a></li>
                            <li><a href="">Tips</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Menu;