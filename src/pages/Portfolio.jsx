import React, { useState } from 'react';
import Row from '../components/uikit/Row';
import logo from '../logo.svg';

const projects = [
    {
        "name": "24HourStatus", description: "Project Management Website", img: logo,
        detail: "Let your clients access & update projects without them having to register an account. Created for IRC RES LLC.",
        href: "https://24hourstatus.com"
    },
    {
        "name": "CTRL API", description: "REST-based Blockchain API", img: logo,
        detail: "CTRL API is a REST API that acts as a CRUD database on Ethereum and IPFS. Created for VaaS Technologies, Inc.",
        href: "https://github.com/LedgerCTRL/ctrl-api-python"
    },
    {
        "name": "YelpCSV", description: "React-based Yelp Scraper", img: logo,
        detail: "Fetches search results from Yelp and converts results into a CSV spreadsheet. Created for myofascialreleaser.com",
        href: "https://github.com/BrockSmedley/YelpCSV"
    },
    {
        "name": "CWBY Coin", description: "Experimental Crypto Exchange & Marketplace", img: logo,
        detail: "Purchase CWBY coins and spend them on merchandise in one site.",
        href: "http://cwby.biz/"
    },
    {
        "name": "xfinite", description: "Network Monitoring/Reporting Tool", img: logo,
        detail: "Monitors network speed and tweets at your provider when it's below a threshold.",
        href: "https://github.com/BrockSmedley/xfinite"
    },
    {
        "name": "All My Code", description: "Hosted on GitHub", img: logo,
        detail: "Check out all my public code repositories on GitHub.",
        href: "https://github.com/BrockSmedley"
    }
];

function project(n, setProjectIdx) {
    return (
        <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin-top uk-margin-bottom" uk-grid="true"
            key={n}
            style={{ width: "100%" }}
            uk-toggle="target: #project-id"
            onClick={() => {
                setProjectIdx(n)
            }}
        >
            <div className="uk-card-media-left uk-cover-container">
                <img src="images/light.jpg" src={projects[n].img} alt={projects[n].name} uk-cover="true" />
                <canvas width="500" height="300"></canvas>
            </div>
            <div>
                <div className="uk-card-body uk-link-heading">
                    <h3 className="uk-card-title"><a href={`#?p=${n}`}>{projects[n].name}</a></h3>
                    <p>{projects[n].description}</p>
                </div>
            </div>
        </div >
    )
}

export default (props) => {
    const [projectIdx, setProjectIdx] = useState(0);

    return (
        <div className="uk-container">
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
                    <a href={projects[projectIdx].href} target="_blank" title={`View ${projects[projectIdx].name}`}>
                        <h2 className="uk-modal-title">{projects[projectIdx].name}</h2>
                    </a>
                    <Row cols={2}>
                        <a href={projects[projectIdx].href} target="_blank">
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