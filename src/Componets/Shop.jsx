import React, { useContext, useEffect, useState } from 'react'
import "./Styles/productsStyle.css"
// import product1 from '../../public/Images/product1.png'
// import product2 from '../../public/Images/product2.png'
import CardItem from './CardItem';
import ProductModal from './ProductModel';
import ContextApi from '../Context/ContextApi';
import { DataContext } from '../Context/DataContext';
import Team from './Team';
import { useLocation } from 'react-router-dom';

const Shop = (props) => {
    const { getProducts, products} = useContext(DataContext);
    // console.log(products)

    const { heading, subHeading } = props;

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

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <>
            <section className="bestProducts rowStyle shopProducts" id='shopId'>
                <div className="container">
                    <div className="bestProdHeadings">
                        <h6 className='paragraphStyle subHeading'>{subHeading}</h6>
                        <h2 className='headingStyle'>{heading}</h2>
                    </div>

                    <div className="row justify-content-center">
                        {products.map((card) => (
                            <div key={card._id} className="col-xl-2 col-lg-3 col-md-3 col-sm-4 d-flex flex-column align-items-center my-3" onClick={() => handleShow(card)}>
                                <CardItem card={card} />
                            </div>
                        ))}

                    </div>
                </div>
            </section>
            {selectedProduct && (
                <ProductModal show={show} handleClose={handleClose} product={selectedProduct} />
            )}

            <Team />
        </>
    )
}

export default Shop
