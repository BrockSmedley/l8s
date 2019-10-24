import React, { useState } from 'react';
import UIkit from 'uikit';
import axios from 'axios';

const sendMessage = (email, message) => {
    axios.post('/contact_send', {
        email,
        message
    });
}

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
                        <div className="uk-card uk-card-body uk-padding">
                            {/* form */}
                            <div className="uk-margin">
                                <label htmlFor="email">Email address</label>
                                <input className="uk-input" type="text" id="email" name="email" placeholder="your email address" onChange={(e) => setEmail(e.target.value)} value={email}></input>
                            </div>
                            <div className="uk-margin">
                                <label htmlFor="message">Message</label>
                                <textarea className="uk-textarea" rows="6" type="text" id="message" placeholder="Send a message..." onChange={(e) => setMessage(e.target.value)} value={message}></textarea>
                            </div>
                            <div className="uk-margin">
                                <button className="uk-button uk-button-default" onClick={() => {
                                    sendMessage(email, message);
                                    setEmail("");
                                    setMessage("");
                                    UIkit.notification({ message: '<span uk-icon=\'icon: check\'></span> Message sent.', timeout: 3000 });
                                }}>Send Message</button>
                            </div>
                        </div>

                        <p>Questions, comments, concerns?</p>
                        <p>Send us an email: <a href="mailto:brock@smedleyconsulting.com">brock@smedleyconsulting.com</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
