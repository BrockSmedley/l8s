import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { Navbar, PagePath } from './components/Navbar';
import Home from './pages/Home';
import Other from './pages/Other';
import { createBrowserHistory as history } from 'history';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: PagePath.Home
        };
    }
    giveMoney() {
        alert("Pls give money.");
    }
    render() {
        return (
            <Router history={history}>
                <div className="App">
                    {/* 
                    TODO: send selected page to navbar for "active" highlighting
                    https://reacttraining.com/react-router/web/example/sidebar 
                    */}
                    <Navbar />
                    <div style={{ marginTop: 80 }}>
                        <Switch>
                            <Route path={PagePath.Other}>
                                <Other />
                            </Route>
                            <Route path={PagePath.Home}>
                                <Home giveMoney={this.giveMoney} />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
