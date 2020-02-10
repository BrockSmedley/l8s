import React, { useState } from 'react';
import logo from '../logo.png';
import { service_development, service_consulting, service_teaching } from './Services';

const services = [
    { name: "Development", description: "We build it for you." },
    { name: "Consulting", description: "We help you get it built." },
    { name: "Teaching", description: "We teach you how to build it." },
];

function modalCard(service, setService, setModalView, children = null) {
    return (
        <div className="uk-card uk-card-body uk-card-hover uk-link-heading" uk-toggle="target: #modal-id"
            onClick={() => { setService(service); setModalView(children); }}>
            <h3 className="uk-card-title"><a href={`#?service=${service.name}`}>{service.name}</a></h3>
            <p>{service.description}</p>
        </div>
    );
}

export default (props) => {
    let [service, setService] = useState("none");
    let [modalView, setModalView] = useState(<></>);
    let techs = [
        "blockchain",
        "smart contracts",
        "cryptocurrency",
        "ethereum",
        "web3",
        "cloud",
        "aws",
        "kubernetes",
        "helm",
        "devops",
        "full stack web",
    ];

    return (
        <>
            <header className="App-header" style={{ marginTop: -80 }}>
                <img src={logo} className="App-logo animated jackInTheBox" alt="logo" />
            </header>
            <div className="uk-container">
                <div className="uk-grid uk-flex-center uk-grid-margin" uk-grid="true" style={{ padding: 32 }}>
                    {
                        techs.map((val, idx, arr) => {
                            return <span className="uk-text-muted" key={idx}>{val}</span>;
                        })
                    }
                </div>
            </div>
            <div className="uk-container">
                <div className="uk-section">
                    <div className="uk-grid-match uk-child-width-1-3@m" uk-grid="true" style={{ paddingLeft: 40 }}>
                        {modalCard(services[0], setService, setModalView, service_development(props.giveMoney))}
                        {modalCard(services[1], setService, setModalView, service_consulting(props.giveMoney))}
                        {modalCard(services[2], setService, setModalView, service_teaching(props.giveMoney))}
                    </div>
                </div>

                <div className="uk-card uk-card-body">
                    <button className="uk-button uk-button-default" onClick={props.giveMoney}>Get a Quote</button>
                </div>

            </div>

            {/* modal */}
            <div id="modal-id" uk-modal="true">
                <div className="uk-modal-dialog uk-modal-body">
                    <a href={`#?service=${service.name}`} target="_blank" rel="noopener noreferrer" title={`View ${service.name}`}>
                        <h2 className="uk-modal-title">{service.name}</h2>
                    </a>
                    {modalView}
                    <div>
                        <button className="uk-modal-close-default" type="button" uk-close="true"></button>
                    </div>
                </div>
            </div>
        </>);
}