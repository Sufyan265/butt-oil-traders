import React, { createContext, useContext, useState } from 'react';
export const AdminContext = createContext();

import { DataContext } from './DataContext';

export const AdminProvider = (props) => {
    const host = "http://localhost:5000";

    const { setProducts } = useContext(DataContext);

    // POST add products
    const addProducts = async (formData) => {
        try {
            const response = await fetch(`${host}/admin/addproduct`, {
                method: 'POST',
                headers: {
                    "auth-token": localStorage.getItem("token"),
                },
                body: formData,
            });

            const data = await response.json();
            console.log(data);
            setProducts(prevProducts => [...prevProducts, data]);
        } catch (error) {
            console.error(error);
            // Handle error (e.g., show a notification to the user)
        }
    };

    // PUT update products
    const updateProduct = async (id, formData) => {
        try {
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

    // DELETE remove products
    const deleteProduct = async (id) => {
        try {
            const response = await fetch(`${host}/admin/delete/${id}`, {
                method: 'DELETE',
                headers: {
                    "auth-token": localStorage.getItem("token"),
                },
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }

            const result = await response.json();

            if (result.message === 'Product deleted') {
                // Remove the product from the state
                setProducts(prevProducts =>
                    prevProducts.filter(product => product._id !== id)
                );
            } else {
                console.error('Error deleting product:', result.message);
            }
        } catch (error) {
            console.error(error);
            // Handle error (e.g., show a notification to the user)
        }
    };

    return (
        <AdminContext.Provider value={{
            addProducts,
            updateProduct,
            deleteProduct,
        }}>
            {props.children}
        </AdminContext.Provider>
    )
}