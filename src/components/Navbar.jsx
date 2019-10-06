import React from 'react';
import { Link } from 'react-router-dom';

const PagePath = {
    Contact: '/contact',
    Home: '/',
    Portfolio: '/portfolio'
};

function click(props, page) {
    props.setPage(page);
}

function HLink(href, name, props) {
    return <li className={window.location.pathname === href ? `uk-active` : ``}>
        <Link to={href} onClick={() => click(props, href)}>{name}</Link>
    </li>;
}

function Navbar(props) {
    return (
        <nav className="uk-navbar-container navbar">
            <div className="uk-navbar-left">
                <ul className="uk-navbar-nav">
                    {HLink(PagePath.Home, "Home", props)}
                    {HLink(PagePath.Portfolio, "Portfolio", props)}
                    {HLink(PagePath.Contact, "Contact", props)}
                </ul>
            </div>
        </nav>
    );
}

export { Navbar, PagePath }