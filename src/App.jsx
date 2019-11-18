import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { Navbar, PagePath } from './components/Navbar';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import Blog from './pages/Blog';

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
        window.location.assign('/contact'); // TODO: should this be replaced??
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
                            <Route path={PagePath.Blog} component={Blog} />
                            <Route path={process.env.REACT_APP_ADMIN_URL} component={Admin} />
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
