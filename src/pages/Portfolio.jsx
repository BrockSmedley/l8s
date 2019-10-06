import React, { useState } from 'react';
import Row from '../components/uikit/Row';
import logo from '../logo.svg';

const projects = [
    { "name": "CTRL API", description: "Blockchain API", img: logo, detail: "Does A. Does B. Solves problem X." },
    { "name": "Something", description: "Does stuff", img: logo, detail: "Does A. Does B. Solves problem X." },
    { "name": "Something", description: "Does stuff", img: logo, detail: "Does A. Does B. Solves problem X." },
    { "name": "Something", description: "Does stuff", img: logo, detail: "Does A. Does B. Solves problem X." },
    { "name": "Something", description: "Does stuff", img: logo, detail: "Does A. Does B. Solves problem X." },
    { "name": "Neat Test", description: "Very neat.", img: logo, detail: "Does A. Does B. Solves problem X." }
    // TODO: add detailed_description field
];

function project(n, setProjectIdx) {
    return (
        <div key={n} uk-toggle="target: #project-id" className="uk-card uk-card-body uk-link-toggle"
            onClick={() => { setProjectIdx(n) }}>
            <h3 className="uk-card-title uk-link-heading">
                <a href={`#?p=${n}`}>{projects[n].name}</a>
            </h3>
            <p>{projects[n].description}</p>
            <img src={projects[n].img} className="App-logo" alt="" />
        </div>
    );
}

export default (props) => {
    const [projectIdx, setProjectIdx] = useState(0);

    return (
        <div className="uk-container">
            <Row cols={3}>
                {
                    projects.map((val, idx) => {
                        return project(idx, setProjectIdx);
                    })
                }
            </Row>

            {/* <!-- This is the modal --> */}
            <div id="project-id" uk-modal="true">
                <div className="uk-modal-dialog uk-modal-body">
                    <h2 className="uk-modal-title">{projects[projectIdx].name}</h2>
                    <Row cols={2}>
                        <img src={projects[projectIdx].img} alt="" />
                        <div>
                            <p>{projects[projectIdx].detail}</p>
                            <button className="uk-modal-close" type="button">OK</button>
                        </div>
                    </Row>
                </div>
            </div>
        </div>
    );
}