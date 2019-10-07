import React from 'react';

class Service extends React.Component {
    render() {
        return (
            <div className="uk-default">
                {this.props.children}
                <button className="uk-button uk-button-default" onClick={this.props.action}>Get a Quote</button>
            </div>
        )
    }
}

function service_development(action) {
    return <Service action={action}>
        <h5>Full Stack Development</h5>
        <p>We build your application from the ground up to give you more flexibility during development. We'll work with you to design a system that fits within your parameters. Any scale, any technology.</p>
        <h5>Best Practice Guarantee</h5>
        <p>Our developers use the latest stable software libraries and stay up to date on best practices. We guarantee your software will benefit from the latest and greatest tech available.</p>
        <h5>Free Bugfixes for 30 Days</h5>
        <p>We will fix any bugs found within 30 days of delivery at NO COST.</p>

    </Service>;
}

function service_consulting(action) {
    return <Service action={action}>
        <h5>Senior Consulting</h5>
        <p>Get strategic advice on software implementations, design, and business cases. Our consulting team consists only of senior developers, so you can rest assured you're getting good information.</p>
        <h5>Real World Advice</h5>
        <p>Every one of our team members has years of experience in the corporate software world, so we know a thing or two. Previous employers include Intel, Daimler Trucks N.A, First Foundry, and Oregon State University.</p>
    </Service>;
}

function service_teaching(action) {
    return <Service action={action}>
        <h5>Learn from the Best</h5>
        <p>Get exclusive 1:1 lessons in any software environment you want to learn.</p>
        <h5>Anything Guarantee</h5>
        <p>If we don't know what you're trying to learn, we'll learn it. If you're not satisfied with your lesson, we'll issue you a full refund.</p>
    </Service>;
}

export { Service, service_development, service_consulting, service_teaching };