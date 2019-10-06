import React, { useState } from 'react';
import Row from '../components/uikit/Row';
import logo from '../logo.svg';

const projects = [
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
    { "name": "Something", description: "Does stuff", img: logo, detail: "Does A. Does B. Solves problem X.", href: "" },
    { "name": "Something", description: "Does stuff", img: logo, detail: "Does A. Does B. Solves problem X.", href: "" },
    { "name": "Something", description: "Does stuff", img: logo, detail: "Does A. Does B. Solves problem X.", href: "" },
    { "name": "Neat Test", description: "Very neat.", img: logo, detail: "Does A. Does B. Solves problem X.", href: "" }
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