import React from 'react';
import { tailChase } from 'ldrs';

tailChase.register();

const Loading = () => {
    return (
        <>
            <style>
                {`
                .loading-container {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 70vh;
                padding: 1.2rem;
                }
            `}
            </style>
            <div className="loading-container">
                <l-tail-chase size="40" speed="1.75" color="black"></l-tail-chase>
            </div>
        </>
    );
};

export default Loading;
