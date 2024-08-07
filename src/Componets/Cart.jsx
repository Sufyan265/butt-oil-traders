// Cart.jsx
import React, { useContext } from 'react';
import "./Styles/cartStyle.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ContextApi from '../Context/ContextApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const ShoppingCart = () => {
    const { cartItems, addToCart, removeItem, updateQuantity } = useContext(ContextApi);

    // const updateQuantity = (id, quantity) => {
    //     // Update quantity through context function if needed
    //     addToCart(id, quantity);
    // };



    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

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
                                <div className="cart-item row" key={item.id} data-price={item.price}>
                                    <div className="col-3">
                                        <img src={item.img} alt="Product" className="img-fluid" />
                                    </div>
                                    <div className="col-6">
                                        <h5>{item.title}</h5>
                                        <p className="text-muted card-desc paragraphStyle">{item.desc}</p>
                                    </div>
                                    <div className="col-3 text-right">
                                        <input
                                            type="number"
                                            className="quantity-input form-control"
                                            value={item.quantity}
                                            min="1"
                                             onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                                        />
                                        <span className="price text-muted mt-2 d-block">Rs. {(item.price * item.quantity).toFixed(2)}</span>
                                        {/* <button className="btn btn-danger mt-2" onClick={() => removeItem(item.id)}>Remove</button> */}
                                        <FontAwesomeIcon icon={faTrashCan} className='mt-2 trashStyle' onClick={() => removeItem(item.id)} />
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    <div className="col-md-4">
                        <div className="cart-summary">
                            <h4>Order Summary</h4>
                            <p className="text-muted">Total Items: {totalItems}</p>
                            <h5>Total: Rs. {totalPrice}</h5>
                            <button className="btn btn-primary btn-block mt-3">Proceed to Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShoppingCart;
