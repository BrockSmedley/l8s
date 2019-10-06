import React from 'react';
import { Link } from 'react-router-dom';

const PagePath = {
    Home: '/',
    Other: '/other'
};

function click(props, page) {
    props.setPage(page);
}

function HLink(href, name, props) {
    return <li className={href === props.page ? `uk-active` : ``}>
        <Link to={href} onClick={() => click(props, href)}>{name}</Link>
    </li>;
}

function Navbar(props) {
    return (
        <nav className="uk-navbar-container navbar">
            <div className="uk-navbar-left">
                <ul className="uk-navbar-nav">
                    {HLink(PagePath.Home, "Home", props)}
                    {HLink(PagePath.Other, "Other", props)}
                </ul>
            </div>
        </nav>
    );
}

export { Navbar, PagePath }