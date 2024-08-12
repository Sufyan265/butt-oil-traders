import React from 'react';
import { Link } from 'react-router-dom';
// import heroImg from "../../public/Images/hero.jpg"

const Hero = () => {
    return (
        <section className="my-5 hero-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Premium Car Filters</h1>
                        <p>Optimize your engine's efficiency with our superior-grade filters, designed for peak performance.</p>
                        <Link to="/shop" className="btn btn-custom" onClick={() => window.scrollTo({ top: 0 })}>Shop Now</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
