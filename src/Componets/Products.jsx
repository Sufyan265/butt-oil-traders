import React, { useState } from 'react'
import "./Styles/productsStyle.css"
// import product1 from '../../public/Images/product1.png'
// import product2 from '../../public/Images/product2.png'
import CardItem from './CardItem';
import ProductModal from './ProductModel';

const products = (props) => {
    const { data, heading, subHeading } = props;

    const [show, setShow] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleShow = (product) => {
        setSelectedProduct(product);
        setShow(true);
    };

    const handleClose = () => {
        setShow(false);
        setSelectedProduct(null);
    };

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
                            <div key={card.id} className="col-xl-3 col-lg-4 col-md-6 col-sm-6 d-flex flex-column align-items-center my-3" onClick={() => handleShow(card)}>
                                <CardItem card={card} />
                            </div>
                        ))}

                    </div>
                </div>
            </section>
            {selectedProduct && (
                <ProductModal show={show} handleClose={handleClose} product={selectedProduct} />
            )}

        </>
    )
}

export default products
