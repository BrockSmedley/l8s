import React, { useState } from 'react';
import Row from '../components/uikit/Row';

function project(n, setProjectIdx) {
    return (
        <div uk-toggle="target: #project-id" className="uk-card uk-card-body uk-link-toggle" onClick={() => { setProjectIdx(n) }}>
            <h3 className="uk-card-title uk-link-heading"><a href={`#?p=${n}`}>Project {n}</a></h3>
            <p>It does something.</p>
        </div>
    );
}

export default (props) => {
    const [projectIdx, setProjectIdx] = useState(0);

    return (
        <div className="uk-container">
            <Row cols={3}>
                {project(1, setProjectIdx)}
                {project(2, setProjectIdx)}
                {project(3, setProjectIdx)}
                {project(4, setProjectIdx)}
                {project(5, setProjectIdx)}
                {project(6, setProjectIdx)}
            </Row>
            {/* <!-- This is a button toggling the modal --> */}
            <button uk-toggle="target: #project-id" type="button">Wow</button>

            {/* <!-- This is the modal --> */}
            <div id="project-id" uk-modal="true">
                <div className="uk-modal-dialog uk-modal-body">
                    <h2 className="uk-modal-title">Modal {projectIdx}</h2>
                    <button className="uk-modal-close" type="button">Click</button>
                </div>
            </div>
        </div>
    );
}