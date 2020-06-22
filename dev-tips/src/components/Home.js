import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import About from './About';

class Home extends React.Component {
    render() {
        return (
            <Router>
                <Sidebar />
                <Switch>
                    <Route path='/' component={ Home } />
                    <Route path='about' component={ About } />
                </Switch>
            </Router>
        )
    }
}

export default Home;