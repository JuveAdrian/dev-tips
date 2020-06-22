import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Menu extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container sidebarContainer">
                    <div className="navbar-header">
                        <ul className="nav navbar-nav">
                            <Link to="/">
                                <li><a href="">Home</a></li>
                            </Link>
                            <Link to="/aboute">
                                <li><a href="">Tips</a></li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Menu;