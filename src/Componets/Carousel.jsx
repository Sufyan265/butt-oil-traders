import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import carousel1 from "../../public/Images/carousel1.png";
import carousel2 from "../../public/Images/carousel2.png";
import carousel3 from "../../public/Images/carousel3.png";

// Sample items for the carousel
const items = [
    { id: 1, image: carousel1 },
    { id: 2, image: carousel2 },
    { id: 3, image: carousel3 },
    { id: 4, image: carousel2 },
];

const MultiCarousel = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <div className="container ">
            <div class="bestProdHeadings">
                <h6 class="paragraphStyle subHeading">Discover Our</h6>
                <h3 class="headingStyle">Top Brands</h3>
            </div>
            {/* <h3 className='headingStyle w-100 my-auto'>Top Brands</h3> */}
            <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={2000}>
                {items.map(item => (
                    <div key={item.id} style={{ padding: '10px' }}>
                        <img src={item.image} alt={item.title} style={{ maxWidth: '100%', borderRadius: '10px' }} />
                        <h3 style={{ textAlign: 'center' }}>{item.title}</h3>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default MultiCarousel;
