// NotFound.jsx

import React from 'react';
import { Link } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';

const NotFound = () => {
    // const location = useLocation();

    // useEffect(() => {
    //     // Redirect to the homepage after 3 seconds (optional)
    //     const redirectTimeout = setTimeout(() => {
    //         window.location.replace('/'); // or window.location.href = '/';
    //     }, 3000);

    //     return () => clearTimeout(redirectTimeout);
    // }, [location]);

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Oops! Page not found.</h1>
            <p style={styles.text}>
                The page you are looking for might have been removed, had its name changed,
                or is temporarily unavailable.
            </p>
            <p style={styles.text}>
                Redirecting you to the <Link to="/">Home page</Link>...
            </p>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '0 20px',
        textAlign: 'center',
    },
    heading: {
        fontSize: '2.5rem',
        marginBottom: '1rem',
    },
    text: {
        fontSize: '1.2rem',
        lineHeight: '1.6',
    },
};

export default NotFound;
