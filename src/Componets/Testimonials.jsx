import React from "react";
// import testimonialImg1 from "../../public/Images/testimonial1.jpg"
// import testimonialImg2 from "../../public/Images/testimonial2.jpg"
import testimonialImg from "../../public/Images/testimonialImg.jpg"

const Testimonials = () => {

    return (
        <section className="my-5">
            <div className="container">
                <div className="row justify-content-center text-center mb-2 mb-lg-4">
                    <div className="col-12 col-lg-8 col-xxl-7 text-center mx-auto">
                        <span className="text-muted">Raving Fans</span>
                        <h2 className="display-5 fw-bold">Our Testimonials</h2>
                        <p className="lead">
                            Discover what our satisfied customers have to say about our top-quality engine oils and exceptional service.
                            At Butt Oil Traders, we pride ourselves on delivering products that exceed expectations.
                        </p>
                    </div>
                </div>
                <div className="row justify-content-between">
                    <div className="col-md-5 order-2 order-md-1">
                        <div className="text-warning mb-4">
                            <svg className="bi bi-quote" fill="currentColor" height="48" viewBox="0 0 16 16" width="48" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"></path>
                            </svg>
                        </div>
                        <p>
                            "Butt Oil Traders has been a game-changer for our automotive needs. Their range of high-quality engine oils and filters has significantly improved our vehicle performance. The exceptional service and knowledgeable staff make them a trusted partner for all our automotive oil requirements."
                        </p>
                        <h5 className="fw-bold">Our Customers</h5>
                        <div className="text-muted">
                            Automotive Technician
                        </div>
                    </div>
                    <div className="col-md-6 order-1 order-md-2">
                        <div className="mb-4 mb-md-0">
                            <img className="img-fluid" src={testimonialImg} alt="Customer testimonial" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default React.memo(Testimonials);
