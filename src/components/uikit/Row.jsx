import React from 'react';

export default (props) => {
    var s = props.s || 1;
    var m = props.m || s;
    var l = props.l || m;
    return (
        <div className={`uk-column-1-${s}@s uk-column-1-${m}@m uk-column-1-${l}@l uk-column-divider`} style={props.style} uk-column="true" >
            {props.children}
        </div>
    );
}