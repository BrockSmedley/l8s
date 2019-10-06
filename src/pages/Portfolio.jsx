import React, { useState } from 'react';
import Row from '../components/uikit/Row';

const projects = [
    { "name": "CTRL API", description: "Blockchain API" },
    { "name": "Something", description: "Does stuff" },
    { "name": "Something", description: "Does stuff" },
    { "name": "Something", description: "Does stuff" },
    { "name": "Something", description: "Does stuff" },
    { "name": "Something", description: "Does stuff" }
];

function project(n, setProjectIdx) {
    return (
        <div uk-toggle="target: #project-id" className="uk-card uk-card-body uk-link-toggle" onClick={() => { setProjectIdx(n) }}>
            <h3 className="uk-card-title uk-link-heading"><a href={`#?p=${n}`}>{projects[n].name}</a></h3>
            <p>{projects[n].description}</p>
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
                    <button className="uk-modal-close" type="button">Click</button>
                </div>
            </div>
        </div>
    );
}