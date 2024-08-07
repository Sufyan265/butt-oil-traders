import React from 'react'
import { useNavigate } from 'react-router-dom';

const Navigation = () => {

    const navigate = useNavigate();
    const handleNavClick = (sectionId) => {
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };
    return (
        <div>

        </div>
    )
}

export default Navigation
