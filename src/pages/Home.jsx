import React from 'react';
import Row from '../components/uikit/Row';
import logo from '../logo.svg';

// TODO: use dotenv for this & use in title as well
const brand = "Catchy Company Name";

export default (props) =>
    <>
        <header className="App-header" style={{ marginTop: -80 }}>
            <img src={logo} className="App-logo" alt="logo" />
            <p>{brand}</p>
        </header>
        <Row cols={3}>
            <div className="uk-card uk-card-body">
                <h3 className="uk-card-title">Development</h3>
                <p>I build shit for you.</p>
            </div>
            <div className="uk-card uk-card-body">
                <h3 className="uk-card-title">Consulting</h3>
                <p>I help you get shit built.</p>
            </div>
            <div className="uk-card uk-card-body">
                <h3 className="uk-card-title">Teaching</h3>
                <p>I teach you how to build shit.</p>
            </div>
        </Row>
        <Row cols={1}>
            <div className="uk-card uk-card-body">
                <button class="uk-button uk-button-default" onClick={props.giveMoney}>Give me your money now.</button>
            </div>
        </Row>
    </>;