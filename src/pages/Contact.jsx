import React from 'react';

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
                        <h3 className="uk-card-title">Let's talk business.</h3>
                        <div className="uk-card uk-card-body uk-padding">
                            {/* form */}
                            <div className="uk-margin">
                                <label htmlFor="email">Email address</label>
                                <input className="uk-input" type="text" id="email" placeholder="your email address"></input>
                            </div>
                            <div className="uk-margin">
                                <label htmlFor="message">Message</label>
                                <textarea className="uk-textarea" rows="6" type="text" id="message" placeholder="Send a message..."></textarea>
                            </div>
                            <div className="uk-margin">
                                <button className="uk-button uk-button-default">Send Message</button>
                            </div>
                        </div>

                        <p>Questions, comments, concerns?</p>
                        <p>Send us an email: <a href="mailto:brock@smedleyconsulting.com">brock@smedleyconsulting.com</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
};