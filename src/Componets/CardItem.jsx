import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import ContextApi from '../Context/ContextApi';

const CardItem = ({ card }) => {
    const { addToCart } = useContext(ContextApi);
    const [isAdded, setIsAdded] = useState(false);

    // function to add commas to a price 
    function formatPrice(price) {
        const number = typeof price === 'string' ? parseFloat(price) : price;
        return number.toLocaleString('en-US');
    }

    const handleAddToCart = (e) => {
        e.stopPropagation();
        addToCart(card.id);
        setIsAdded(true); // Set the state to true when the item is added to the cart
    };

    return (
        <>
            <div className="productCard">
                <div className="productImage">
                    <img src={card.img} alt="Loading..." loading="lazy" />
                </div>
                <div className="productContent px-2 mt-2">
                    <p className="paragraphStyle card-categorize">{card.category}</p>
                    <h4 className="headingStyle">{card.title}</h4>
                    <p className="paragraphStyle card-desc">{card.desc}</p>
                    <div className="priceStyle">{`Rs. ${formatPrice(card.price)}`}<span>.00</span></div>
                    <button className="btn btn-dark text-nowrap btnStyle" onClick={handleAddToCart}>
                        {isAdded ? <> Added <FontAwesomeIcon icon={faCheck} className='cartIcon'/> </> : 'Add to Cart'}
                    </button>
                </div>
            </div>
        </>
    );
}

export default CardItem;
