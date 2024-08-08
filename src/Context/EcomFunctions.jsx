import { useContext, useEffect, useState } from 'react';
import ContextApi from './ContextApi';
import { DataContext } from './DataContext';
import { useNavigate } from 'react-router-dom';

const EcomFunctions = (props) => {
    const { bestSellingData, filtersData, shopData, } = useContext(DataContext);




    // Retrieve initial cart items from local storage, or default to an empty array
    const getInitialCart = () => {
        const storedCart = localStorage.getItem('cartItems');
        return storedCart ? JSON.parse(storedCart) : [];
    };

    const [cartItems, setCartItems] = useState(getInitialCart);
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        // Update the total number of distinct items in the cart
        setTotalItems(cartItems.length);
    }, [cartItems]);

    // Function to add an item to the cart or increase quantity if already exists
    const addToCart = (id, productQuantity = 1) => {

        // Find the product using the id from bestSellingData or filtersData
        const product = bestSellingData.find(product => product.id === id) ||
            filtersData.find(product => product.id === id);

        const updatedCart = cartItems.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + productQuantity } : item
        );

        if (!updatedCart.some(item => item.id === id)) {
            updatedCart.push({ ...product, quantity: productQuantity });
        }

        setCartItems(updatedCart);
        localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    };

    // Function to update the quantity of a specific item in the cart
    const updateQuantity = (id, quantity) => {
        const updatedCart = cartItems.map(item =>
            item.id === id ? { ...item, quantity: quantity } : item
        );

        setCartItems(updatedCart);
        localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    };

    // Function to remove an item from the cart
    const removeItem = (id) => {
        const updatedCart = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCart);
        localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    };

    // Use useEffect to update local storage whenever cartItems changes
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const totalItemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

    const navigate = useNavigate();
    const handleNavClick = async (sectionId, path = "/") => {
        // if (location.pathname !== '/') {
        await navigate(path);
        // setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        // }, 100);
        // } else {
        //     const element = document.getElementById(sectionId);
        //     if (element) {
        //         element.scrollIntoView({ behavior: 'smooth' });
        //     }
        // }
    };

    return (
        <ContextApi.Provider value={{
            handleNavClick,
            bestSellingData,
            filtersData,
            shopData,
            cartItems,
            addToCart,
            removeItem,
            updateQuantity,
            totalItems,
            totalItemsCount,
            totalPrice,

        }}>
            {props.children}
        </ContextApi.Provider>
    )
}

export default EcomFunctions;
