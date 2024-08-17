import React, { useState } from 'react';
export const AdminContext = createContext();
import { DataContext } from './DataContext';

export const AdminProvider = (props) => {
    const host = "http://localhost:5000";

    const { setProducts, } = useContext(DataContext);

    // const initialSingleProduct = [];

    // const [uploadProduct, setUploadProduct] = useState([])
    // const [editProduct, setEditProduct] = useState([])


    // POST add products
    const addProducts = async (formElement) => {
        try {
            const formData = new FormData(formElement);

            const response = await fetch(`${host}/admin/addproduct`, {
                method: 'POST',
                headers: {
                    "auth-token": localStorage.getItem("token"),
                },
                body: formData,
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }

            const data = await response.json();
            setProducts(prevProducts => [...prevProducts, data]);
        } catch (error) {
            console.error(error);
            // Handle error (e.g., show a notification to the user)
        }
    };

    // PUT update products
    const updateProduct = async (id, formElement) => {
        try {
            const formData = new FormData(formElement);

            const response = await fetch(`${host}/admin/update/${id}`, {
                method: 'PUT',
                headers: {
                    "auth-token": localStorage.getItem("token"),
                },
                body: formData,
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }

            const updatedProduct = await response.json();

            // Update the product in the state
            setProducts(prevProducts =>
                prevProducts.map(product =>
                    product._id === id ? updatedProduct : product
                )
            );
        } catch (error) {
            console.error(error);
            // Handle error (e.g., show a notification to the user)
        }
    };
    return (
        <AdminContext.Provider value={{
            addProducts,

        }}>
            {props.children}
        </AdminContext.Provider>
    )
}