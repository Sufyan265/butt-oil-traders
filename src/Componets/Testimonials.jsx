import React from "react";
import testimonialImg1 from "../../public/Images/testimonial1.jpg"
import testimonialImg2 from "../../public/Images/testimonial2.jpg"

const Testimonials = () => {
    const testimonials = [
        {
            name: "Ahmed Khan",
            position: "Logistics Manager",
            image: testimonialImg1,
            feedback:
                "Butt Oil Traders have exceeded my expectations! Their range of products is fantastic, and their service is exceptional. Highly recommend!",
        },
        {
            name: "Fatima Ali",
            position: "Automotive Engineer",
            image: testimonialImg2,
            feedback:
                "I have been using Butt Oil Traders for all my vehicle needs, and they never disappoint. The quality of their oils and filters is top-notch.",
        },
    ];

    return (
        <section className="my-5">
            <div className="container">
                <div className="row justify-content-center text-center mb-2 mb-lg-4">
                    <div className="col-12 col-lg-8 col-xxl-7 text-center mx-auto">
                        <span className="text-muted">Raving Fans</span>
                        <h2 className="display-5 fw-bold">Our Testimonials</h2>
                        <p className="lead">
                            Discover what our satisfied customers have to say about Butt Oil Traders. Our commitment to quality and customer satisfaction is unparalleled.
                        </p>
                    </div>
                </div>
                <div className="row gy-5 py-4">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="col-lg-6 d-flex align-items-start">
                            <img
                                alt={testimonial.name}
                                className="img-fluid rounded-circle me-3"
                                height="96"
                                src={testimonial.image}
                                width="96"
                            />
                            <div className="bg-light p-3 p-md-5">
                                <div className="mb-1" style={{ color: "var(--primaryColor)" }}>
                                    <svg
                                        className="bi bi-quote"
                                        fill="currentColor"
                                        height="32"
                                        viewBox="0 0 16 16"
                                        width="32"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"></path>
                                    </svg>
                                </div>
                                <p>{testimonial.feedback}</p>
                                <div className="text-end pt-2">
                                    <h5 className="fw-bold">{testimonial.name}</h5>
                                    <div className="text-muted">{testimonial.position}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
