import React, { useContext, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import ContextApi from '../Context/ContextApi';

const ProductModal = ({ show, handleClose, product }) => {
    const { addToCart } = useContext(ContextApi);

    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (amount) => {
        setQuantity(prevQuantity => Math.max(1, prevQuantity + amount));
    };

    // async function addCartItems(id) {
    //     await updateQuantity(id, quantity);
    //     await addToCart(id);
    // }

    // Function to add commas to a price 
    function formatPrice(price) {
        const number = typeof price === 'string' ? parseFloat(price) : price;
        return number.toLocaleString('en-US');
    }

    return (
        <Modal show={show} onHide={handleClose} dialogClassName="m-auto custom-modal">
            <Modal.Header closeButton>
                <Modal.Title className='w-100 text-center'>{product.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="modal-image">
                                <img src={product.img} alt={product.title} className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="modal-details">
                                <h4>{product.title}</h4>
                                <p><strong>Category:</strong> {product.category}</p>
                                <div className='priceStyle'>Rs. {formatPrice(product.price)}<span>.00</span></div>
                                <p>{product.desc}</p>
                                <div className="quantity-control">
                                    <button onClick={() => handleQuantityChange(-1)}>-</button>
                                    <input type="text" value={quantity} readOnly />
                                    <button onClick={() => handleQuantityChange(1)}>+</button>
                                </div>

                                {/* <button className="btn btn-dark btnStyle" onClick={() => {
                                    updateQuantity(product.id, quantity);
                                    addToCart(product.id);
                                }}>Add to Cart</button> */}
                                <button className="btn btn-dark btnStyle" onClick={() => addToCart(product.id, quantity)}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default ProductModal;
