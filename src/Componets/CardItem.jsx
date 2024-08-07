import React, { useContext } from 'react'
import ContextApi from '../Context/ContextApi';

const CardItem = ({ card }) => {
    const { addToCart } = useContext(ContextApi);

    
    // function to add commas to a price 
    function formatPrice(price) {
        const number = typeof price === 'string' ? parseFloat(price) : price;
        return number.toLocaleString('en-US');
    }

    return (
        <>
            <div className="productCard">
                <div className="productImage">
                    <img src={card.img} alt="Loading..." loading='lazy' />
                </div>
                <div className="productContent">
                    <p className='paragraphStyle card-categorize'>{card.categorize}</p>
                    <h4 className='headingStyle'>{card.title}</h4>
                    <p className='paragraphStyle card-desc'>{card.desc}</p>
                    <div className='priceStyle'>{`Rs. ${formatPrice(card.price)}`}<span>.00</span></div>
                    <button className="btn btn-dark btnStyle" onClick={() => addToCart(card.id)}>Add to Cart</button>
                </div>
            </div>
        </>
    )
}

export default CardItem
