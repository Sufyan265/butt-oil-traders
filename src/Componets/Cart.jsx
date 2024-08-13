import React, { useContext, useEffect, useState } from 'react';
import "./Styles/cartStyle.css";
import ContextApi from '../Context/ContextApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import { DataContext } from '../Context/DataContext';

// function to add commas to a price 
function formatPrice(price) {
    const number = typeof price === 'string' ? parseFloat(price) : price;
    return number.toLocaleString('en-US');
}


const ShoppingCart = () => {
    const { cartItems, removeItem, updateQuantity, totalItemsCount, totalPrice, } = useContext(ContextApi);
    const { getProducts, bestProducts, populerProducts, } = useContext(DataContext);

    const [isLoading, setIsLoading] = useState(true);

    // Handle image load event
    const handleImageLoad = () => {
        setIsLoading(false);
    };
    useEffect(() => {
        getProducts();
        bestProducts();
        populerProducts();
    }, []);

    return (
        <>
            <div className="container cartPage">
                <div className="row cart-header">
                    <div className="col">
                        <h2>Shopping Cart</h2>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-md-8" id="cart-items">
                        {cartItems.length === 0 ? (
                            <p className='paragraphStyle text-center'>Your cart is empty. Add some items to it!</p>
                        ) : (
                            cartItems.map(item => (
                                <div className="cart-item row" key={item._id} data-price={item.price}>
                                    <div className="col-3 d-flex justify-content-center">
                                        {/* <img src={item.img} alt="Product" className="img-fluid" /> */}
                                        {/* </div> */}

                                        <div style={{ position: 'relative' }}>
                                            {isLoading && (
                                                <div className="loading-container" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                                                    <Loading size="25" />
                                                </div>
                                            )}
                                            <img
                                                src={item.img} className="img-fluid"
                                                alt="Loading..."
                                                onLoad={handleImageLoad}
                                                style={{ display: isLoading ? 'none' : 'block' }}
                                                loading="lazy"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <h5>{item.title}</h5>
                                        <p className="text-muted card-desc paragraphStyle">{item.description}</p>
                                    </div>
                                    <div className="col-3 text-right">
                                        <input
                                            type="number"
                                            className="quantity-input form-control"
                                            value={item.quantity}
                                            min="1"
                                            onChange={(e) => updateQuantity(item._id, parseInt(e.target.value))}
                                        />
                                        <span className="price text-muted mt-2 d-block">Rs. {formatPrice((item.price * item.quantity).toFixed(2))}</span>
                                        {/* <button className="btn btn-danger mt-2" onClick={() => removeItem(item._id)}>Remove</button> */}
                                        <FontAwesomeIcon icon={faTrashCan} className='mt-2 trashStyle' onClick={() => removeItem(item._id)} />
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    <div className="col-md-4">
                        <div className="cart-summary">
                            <h4>Order Summary</h4>
                            <p className="text-muted">Total Items: {totalItemsCount}</p>
                            <h5>Total: Rs. {formatPrice(totalPrice)}</h5>
                            <Link to="/checkout" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                                <button className="btn btn-dark btn-block mt-3 btnStyle" disabled={cartItems.length === 0}>Proceed to Checkout</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShoppingCart;
