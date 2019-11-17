import React, { useState } from 'react';
import UIkit from 'uikit';
import axios from 'axios';

export default (props) => {
    var [message, setMessage] = useState("");
    var [email, setEmail] = useState("");
    return (
        <div className="uk-container uk-padding">
            <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid="true">
                <div className="uk-card-media-left uk-cover-container">
                    <img src="/img/ctrl.png" alt="" uk-cover="true" />
                    <canvas width="600" height="400"></canvas>
                </div>
                <div>
                    <div className="uk-card-body">
                        <h3 className="uk-card-title">Let's talk business.</h3>
                        <p>Send us an email: <a href="mailto:brock@smedleyconsulting.com">brock@smedleyconsulting.com</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
