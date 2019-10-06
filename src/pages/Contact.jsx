import React from 'react';
import Row from '../components/uikit/Row';

export default (props) => {
    return (
        <div className="uk-container uk-padding">
            <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid="true">
                <div className="uk-card-media-left uk-cover-container">
                    <img src="/img/ctrl.png" alt="" uk-cover="true" />
                    <canvas width="600" height="400"></canvas>
                </div>
                <div>
                    <div className="uk-card-body">
                        <h3 className="uk-card-title">Get In Touch</h3>
                        <p>Questions, comments, concerns? Need something?</p>
                        <p>Send us an email: <a href="mailto:brock@smedleyconsulting.com">brock@smedleyconsulting.com</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
};