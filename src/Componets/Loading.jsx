import React from 'react';
import { tailChase } from 'ldrs';

tailChase.register();

const Loading = (props) => {
    const { height="auto", size="30" } = props
    return (
        <>
            <style>
                {`
                .loading-container {
                possition: relative;
                display: flex;
                justify-content: center;
                align-items: center;
                height: ${height};
                }
            `}
            </style>
            <div className="loading-container">
                <l-tail-chase size={size} speed="1.75" color="black"></l-tail-chase>
            </div>
        </>
    );
};

export default Loading;
