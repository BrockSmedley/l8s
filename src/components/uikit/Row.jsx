import React from 'react';

export default (props) => {
    return (
        <div className={`uk-column-1-${props.cols}`} uk-column="true">
            {props.children}
        </div>
    );
}