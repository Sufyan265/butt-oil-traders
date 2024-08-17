import React, { useContext, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import "./Styles/productsStyle.css";
import CardItem from './CardItem';
import { DataContext } from '../Context/DataContext';
import Team from './Team';

const Shop = (props) => {
    const { getProducts, products, handleProductClick } = useContext(DataContext);

    const { heading, subHeading } = props;

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
                            <div key={card._id} className="col-xl-2 col-lg-3 col-md-3 col-sm-4 d-flex flex-column align-items-center my-3" onClick={() => handleProductClick(card._id)}>
                                <CardItem card={card} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Team />
        </>
    );
};

export default Shop;