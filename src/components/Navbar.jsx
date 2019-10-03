import React from 'react';
import { Link } from 'react-router-dom';

const PagePath = {
    Home: '/',
    Other: '/other'
};

function Navbar(props) {
    return (
        <nav className="uk-navbar-container navbar">
            <div className="uk-navbar-left">
                <ul className="uk-navbar-nav">
                    <li className={`uk-active`}>
                        <Link to={PagePath.Home}>Home</Link>
                    </li>
                    <li className="uk-active">
                        <Link to={PagePath.Other}>Other</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export { Navbar, PagePath }