import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { Navbar, PagePath } from './components/Navbar';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
require('dotenv').config();

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: PagePath.Home
        };
        this.setPage = this.setPage.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }
    giveMoney() {
        alert("Pls give money to " + process.env.REACT_APP_TITLE + ".");
    }
    setPage(page) {
        this.setState({ page });
    }
    componentDidMount() {
        this.setPage(this.state.page);
    }
    render() {
        return (
            <Router>
                <div className="App">
                    <Navbar page={this.state.page} setPage={this.setPage} />
                    <div style={{ marginTop: 80 }}>
                        <Switch>
                            <Route path={PagePath.Portfolio} component={Portfolio} />
                            <Route path={PagePath.Contact} component={Contact} />
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
