import React, { useState } from 'react';
import Row from '../components/uikit/Row';
import logo from '../logo.svg';

const projects = [
    {
        "name": "24HourStatus", description: "Project management website", img: "/img/24hs.png",
        detail: "Let your clients access & update projects without them having to register an account. Created for IRC RES LLC.",
        href: "https://24hourstatus.com",
        tech: ["react", "bootstrap", "next.js", "express.js", "stripe.js", "docker", "mongodb", "aws-s3", "nginx", "js"]
    },
    {
        "name": "CTRL API", description: "REST-based blockchain API", img: "/img/ctrl.png",
        detail: "CTRL API is a REST API that acts as a CRUD database on Ethereum and IPFS. Created for VaaS Technologies, Inc.",
        href: "https://github.com/LedgerCTRL/ctrl-api-python",
        tech: ["flask", "python3", "docker", "mongodb", "redis", "ethereum", "ipfs", "parity", "python"]
    },
    {
        "name": "CTRL Frontend", description: "File storage site using CTRL API", img: "/img/ctrl-front.png",
        detail: "Using the CTRL API, this site lets users create an account and store private files online in a decentralized environment.",
        href: "https://github.com/BrockSmedley/ledgerCTRL-frontend",
        tech: ["react", "js", "ipfs", "web3.js", "bootstrap"]
    },
    {
        "name": "YelpCSV", description: "React-based Yelp scraper", img: "/img/yelpcsv.png",
        detail: "Fetches search results from Yelp and converts results into a CSV spreadsheet. Created for myofascialreleaser.com",
        href: "https://github.com/BrockSmedley/YelpCSV",
        tech: ["react", "materialize", "js", "docker", "yelp api"]
    },
    {
        "name": "CWBY Coin", description: "Experimental crypto exchange & marketplace", img: "/img/cwby.png",
        detail: "Purchase CWBY coins and spend them on merchandise in one site.",
        href: "http://cwby.biz/",
        tech: ["flask", "python3", "web3.js", "web3.py", "ethereum", "erc20", "stripe.js", "js"]
    },
    {
        "name": "xfinite", description: "Network monitoring/reporting tool", img: "/img/xfinite.png",
        detail: "Monitors network speed and tweets at your provider when it's below a threshold.",
        href: "https://github.com/BrockSmedley/xfinite",
        tech: ["python3", "twitter api", "docker", "cron"]
    },
    {
        "name": "L8S Software Services", description: "This site.", img: logo,
        detail: "See the source code for the website you're viewing right now!",
        href: "https://github.com/BrockSmedley/smedley-consulting-portfolio",
        tech: ["react", "uikit-css", "express.js", "js", "heroku"]
    }
];

function project(n, setProjectIdx) {
    return (
        <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid="true"
            key={n}
            style={{ width: "100%" }}
            uk-toggle="target: #project-id"
            onClick={() => {
                setProjectIdx(n)
            }}
        >
            <div className="uk-card-media-left uk-cover-container">
                <img src={projects[n].img} alt={projects[n].name} uk-cover="true" uk-img="true" />
                <canvas width="400" height="350"></canvas>
            </div>
            <div>
                <div className="uk-card-body uk-link-heading">
                    <h3 className="uk-card-title"><a href={`#?p=${n}`}>{projects[n].name}</a></h3>
                    <p>{projects[n].description}</p>

                    <div className="uk-grid uk-flex-center uk-grid-margin" uk-grid="true" style={{ padding: 32 }}>
                        {projects[n].tech.map((val, idx) => {
                            return <span key={idx}>{val}</span>;
                        })}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default (props) => {
    const [projectIdx, setProjectIdx] = useState(0);

    return (
        <div className="uk-container uk-padding">
            <div className="uk-grid" uk-grid="true">
                {
                    projects.map((val, idx) => {
                        return project(idx, setProjectIdx);
                    })
                }
            </div>

            {/* <!-- This is the modal --> */}
            <div id="project-id" uk-modal="true">
                <div className="uk-modal-dialog uk-modal-body">
                    <a href={projects[projectIdx].href} target="_blank" rel="noopener noreferrer" title={`View ${projects[projectIdx].name}`}>
                        <h2 className="uk-modal-title">{projects[projectIdx].name}</h2>
                    </a>
                    <Row cols={2}>
                        <a href={projects[projectIdx].href} target="_blank" rel="noopener noreferrer">
                            <img src={projects[projectIdx].img} alt={projects[projectIdx].name} title={`View ${projects[projectIdx].name}`} />
                        </a>
                        <div>
                            <p>{projects[projectIdx].detail}</p>
                            <button className="uk-modal-close-default" type="button" uk-close="true"></button>
                        </div>
                    </Row>
                </div>
            </div>
        </div>
    );
}