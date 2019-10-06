import React, { useState } from 'react';
import Row from '../components/uikit/Row';
import logo from '../logo.svg';
import { service_development } from './Services';

const brand = process.env.REACT_APP_TITLE;

const services = [
    { name: "Development", description: "We build it for you." },
    { name: "Consulting", description: "We help you get it built." },
    { name: "Teaching", description: "We teach you how to build it." },
];

function modalCard(service, setService, setModalView, children = null) {
    return (
        <div className="uk-card uk-card-body uk-link-heading" uk-toggle="target: #modal-id"
            onClick={() => { setService(service); setModalView(children); }}>
            <h3 className="uk-card-title"><a href={`#?service=${service.name}`}>{service.name}</a></h3>
            <p>{service.description}</p>
        </div>
    );
}

export default (props) => {
    let [service, setService] = useState("none");
    let [modalView, setModalView] = useState(<></>);

    return (
        <>
            <header className="App-header" style={{ marginTop: -80 }}>
                <img src={logo} className="App-logo" alt="logo" />
                <p>{brand}</p>
            </header>
            <div className="uk-container uk-padding">
                <Row cols={3}>
                    {modalCard(services[0], setService, setModalView, service_development())}
                    {modalCard(services[1], setService, setModalView, <>description_2</>)}
                    {modalCard(services[2], setService, setModalView, <>description_3</>)}
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
                    <a href={`#?service=${service.name}`} target="_blank" rel="noopener noreferrer" title={`View ${service.name}`}>
                        <h2 className="uk-modal-title">{service.name}</h2>
                    </a>
                    <p>{service.description}</p>
                    {modalView}
                    <div>
                        <button className="uk-modal-close-default" type="button" uk-close="true"></button>
                    </div>
                </div>
            </div>
        </>);
}