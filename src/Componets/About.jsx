import React from 'react'
import aboutImg from '../../public/Images/aboutImg.png'

const About = () => {
    return (
        <>
            <section className="py-5">
                <div className="container">
                    <div className="row gx-4 align-items-center">
                        <div className="col-md-6 order-2 order-lg-1">
                            <div className="me-md-2 me-lg-5 mt-5 mt-md-0">
                                <span className="text-muted paragraphStyle subHeading">Our Story</span>
                                <h2 className="display-5 fw-bold">About Us</h2>
                                <p className="lead paragraphStyle">
                                    Welcome to Butt Oil Traders, your trusted partner in top-quality automotive filters and lubricants. With years of industry experience, we are committed to providing products that enhance your vehicle's performance and longevity. Our extensive range includes oil filters, diesel filters, air filters, AC filters, and petrol filters, all sourced from reputable manufacturers to ensure the highest standards of quality and reliability. <br /><br />

                                    At Butt Oil Traders, we understand the importance of maintaining your vehicle's health. Our team of experts is passionate about automotive care and ready to assist you with any questions or concerns. We believe in building long-term relationships by offering personalized service and support, ensuring you have the best products and information for your vehicle's maintenance.<br /><br />

                                    In addition to high-quality products, we are committed to sustainability and environmental responsibility. Our goal is to provide exceptional products that contribute to a cleaner and greener environment.<br /><br />

                                    Thank you for choosing Butt Oil Traders. We look forward to serving you and helping you achieve the best performance and protection for your vehicle.

                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 order-1 order-lg-2">
                            <div className="ms-md-2 ms-lg-5"><img className="img-fluid rounded-3" src={aboutImg} loading='lazy' /></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
