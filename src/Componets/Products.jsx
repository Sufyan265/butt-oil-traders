import React from 'react'
import "./Styles/productsStyle.css"
// import product1 from '../../public/Images/product1.png'
// import product2 from '../../public/Images/product2.png'
import CardItem from './CardItem';

const products = (props) => {
    const {data, heading, subHeading } = props;

    return (
        <>
            <section className="bestProducts" id='productId'>
                <div className="container">
                    <div className="bestProdHeadings">
                        <h6 className='paragraphStyle subHeading'>{subHeading}</h6>
                        <h2 className='headingStyle'>{heading}</h2>
                    </div>

                    <div className="row justify-content-center">
                        {data.map((card) => (
                            <div key={card.id} className="col-xl-3 col-lg-4 col-md-6 col-sm-6 d-flex flex-column align-items-center my-3">
                                <CardItem card={card} />
                            </div>
                        ))}

                    </div>
                </div>
            </section>
        </>
    )
}

export default products
