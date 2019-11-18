import React, { useState } from 'react';
import useAxios from 'axios-hooks';

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
                return <div>
                    <p>{val.title}</p>
                    <p>{val.body}</p>
                </div>;
            })
        }</pre>
    </>;
};