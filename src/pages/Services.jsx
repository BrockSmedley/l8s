import React from 'react';

class Service extends React.Component {
    render() {
        return (
            <div className="uk-default">{this.props.children}</div>
        )
    }
}

function service_development() {
    return <Service>
        <h5>Full Stack Development</h5>
        <p>We build your application from the ground up to give you more flexibility during development. We'll work with you to design a system that fits within your parameters. Any scale, any technology.</p>
        <h5>Best Practice Guarantee</h5>
        <p>Our developers use the latest stable software libraries and stay up to date on best practices. We guarantee your software will benefit from the latest and greatest tech available.</p>
        <h5>Free Bugfixes for 30 Days</h5>
        <p>We will fix any bugs found within 30 days of delivery at NO COST.</p>

    </Service>;
}

export { Service, service_development };