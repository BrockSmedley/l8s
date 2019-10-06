import React, { useState } from 'react';
import Row from '../components/uikit/Row';
import logo from '../logo.svg';

// TODO: use dotenv for this & use in title as well
const brand = "Catchy Company Name";

const services = [
    { name: "Development", description: "I build shit for you." },
    { name: "Consulting", description: "I help you get shit built." },
    { name: "Teaching", description: "I teach you how to build shit." },
];

function modalCard(service, setService) {
    return (
        <div className="uk-card uk-card-body uk-link-heading" uk-toggle="target: #modal-id"
            onClick={() => { setService(service); }}>
            <h3 className="uk-card-title"><a href={`#?service=${service.name}`}>{service.name}</a></h3>
            <p>{service.description}</p>
        </div>
    );
}

export default (props) => {
    let [service, setService] = useState("none");

    return (
        <>
            <header className="App-header" style={{ marginTop: -80 }}>
                <img src={logo} className="App-logo" alt="logo" />
                <p>{brand}</p>
            </header>
            <br />
            <div className="uk-container">
                <Row cols={3}>
                    {modalCard(services[0], setService)}
                    {modalCard(services[1], setService)}
                    {modalCard(services[2], setService)}
                </Row>
                <Row cols={1}>
                    <div className="uk-card uk-card-body">
                        <button className="uk-button uk-button-default" onClick={props.giveMoney}>Give me your money now.</button>
                    </div>
                </Row>
            </div>

            {/* modal */}
            <div id="modal-id" uk-modal="true">
                <div className="uk-modal-dialog uk-modal-body">
                    <a href={`#?service=${service.name}`} target="_blank" title={`View ${service.name}`}>
                        <h2 className="uk-modal-title">{service.name}</h2>
                    </a>

                    <div>
                        <button className="uk-modal-close-default" type="button" uk-close="true"></button>
                    </div>
                </div>
            </div>
        </>);
}