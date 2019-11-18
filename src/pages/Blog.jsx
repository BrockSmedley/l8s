import React, { useState } from 'react';
import useAxios from 'axios-hooks';
import { type } from 'os';

// blog page
export default () => {
    const [{ data: getData, loading: getLoading, error: getError }] = useAxios(
        'http://localhost:8080/blogpost'
    );

    if (getLoading) return <>Loading...</>;
    if (getError) return <>
        <p>{getError.name}</p>
        <p>{getError.message}</p>
        <p>{getError.code}</p>
        <p>{getError.stack}</p>
    </>;

    return <>
        <pre>{
            // JSON.stringify(getData, null, 2)
            getData.map((val, idx, arr) => {
                if (val.published) {
                    return <div key={idx}>
                        <p>{val.title}</p>
                        <p>{val.body}</p>
                    </div>;
                }
            })
        }</pre>
    </>;
};