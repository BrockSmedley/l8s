import React, { useState } from 'react';
import useAxios from 'axios-hooks';

// blog page
export default () => {
    const [{ data: getData, loading: getLoading, error: getError }] = useAxios(
        process.env.NODE_ENV == "development" ? 'http://localhost:8080/blogpost' : 'https://www.l8s.co/blogpost'
    );

    if (getLoading) return <>Loading...</>;
    if (getError) return <>
        <p>{getError.name}</p>
        <p>{getError.message}</p>
        <p>{getError.code}</p>
        <p>{getError.stack}</p>
    </>;

    return <>
        <div>
            <strong>Notice</strong>
            <p>
                <em>I'm posting my progress as I build this blog.
                    <br />Expect it to look a little off for a while.
                    <br />Expect short bursts of loosely related content.
                    <br />Thanks for reading!</em>
            </p>
        </div>
        <pre>{
            // JSON.stringify(getData, null, 2)
            getData.map((val, idx, arr) => {
                if (val.published) {
                    return <div key={idx} style={{ margin: "auto", width: "800px" }}>
                        <h1>{val.title}</h1>
                        <div dangerouslySetInnerHTML={{ __html: val.body }} />
                    </div>;
                }
            })
        }</pre>
    </>;
};