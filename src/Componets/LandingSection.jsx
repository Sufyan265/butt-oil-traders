import React, { useContext } from 'react'
import "./Styles/landingStyle.css"
import { Link } from 'react-router-dom';
import landingImg from '../../public/Images/landing-img.png'
// import ContextApi from '../Context/ContextApi';

const LandingSection = () => {
    // const { handleNavClick } = useContext(ContextApi);
    return (
        <>
            <section className="landingSection">
                <div className="container">
                    <div className="row landingContainer">
                        <div className="col-lg-6 col-md-6 col-sm-12 my-3 landing-left">
                            <div className="landingContent">
                                <h6 className='paragraphStyle subHeading'>Discover Butt Oil Traders</h6>
                                <h1 className='headingStyle'>High-Performance Oils and Filters for Your Car</h1>
                                <p className='paragraphStyle summary'>Discover our expertly curated range of car engine oils and filters, designed to enhance performance and reliability. Our professional team is dedicated to helping you find the perfect products to keep your vehicle running smoothly.</p>

                                <Link to="/shop" className="btn btn-dark btnStyle" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Shop Collection</Link>

                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="landingImage">
                                <img src={landingImg} alt="Loading..." loading='lazy' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LandingSection
