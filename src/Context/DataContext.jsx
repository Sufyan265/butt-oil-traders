import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = (props) => {

    // const images = import.meta.glob([
    //     '../../public/Images/*.png',
    //     '../../public/Images/*.jpg',
    //     '../../public/Images/*.jpeg',
    //     '../../public/Images/*.gif',
    //     '../../public/Images/*.svg'
    // ], { eager: true });

    // // Create an object with image URLs
    // const imagePaths = Object.keys(images).reduce((acc, path) => {
    //     const imageName = path.replace('../../public/Images/', '');
    //     acc[imageName] = images[path].default || images[path];
    //     return acc;
    // }, {});

    // const bestSellingDataObj = [
    //     { _id: 1, img: imagePaths['product1.png'], title: "Premium Engine Oil", description: "Our Premium Engine Oil provides high-performance protection and lubrication, ensuring your engine runs smoothly under all conditions. Perfect for those who demand the best for their vehicles.", category: "Engine Oil", price: 2000 },
    //     { _id: 2, img: imagePaths['populerOil.jpg'], title: "Synthetic Gear Oil", description: "Experience the advanced formulation of our Synthetic Gear Oil, which offers superior lubrication and wear protection, ensuring your gear system operates efficiently and reliably.", category: "Gear Oil", price: 4000 },
    //     { _id: 3, img: imagePaths['product1.png'], title: "Hydraulic Power Oil", description: "Our Hydraulic Power Oil is designed for optimal power transfer and control, providing reliable performance and long-lasting protection for all your hydraulic systems.", category: "Power Oil", price: 9000 },
    //     { _id: 4, img: imagePaths['product2.png'], title: "Compressor Oil", description: "Keep your compressors running at peak efficiency with our high-quality Compressor Oil, which enhances performance and extends the lifespan of your compressor units.", category: "Compressor Oil", price: 500 },
    //     { _id: 5, img: imagePaths['product5.png'], title: "Oil/Diesel Filter", description: "Our Oil and Diesel Filters ensure clean, contaminant-free fuel flow, protecting your engine and enhancing performance. These filters are designed for maximum efficiency and longevity.", category: "Oil/Diesel Filters", price: 2000 },
    //     { _id: 6, img: imagePaths['product1.png'], title: "Air Filter", description: "Ensure your engine breathes easy with our superior Air Filters. They provide excellent filtration to keep your engine running smoothly and efficiently by preventing dust and debris ingress.", category: "Air Filters", price: 11000 },
    //     { _id: 7, img: imagePaths['product1.png'], title: "AC Filter", description: "Our high-efficiency AC Filters improve air quality inside your vehicle by trapping dust, pollen, and other pollutants, ensuring a healthier and more comfortable ride for you and your passengers.", category: "AC Filters", price: 1000 },
    //     { _id: 8, img: imagePaths['product1.png'], title: "Petrol Filter", description: "Top-quality Petrol Filters designed to maintain pure and efficient fuel delivery, protecting your engine from contaminants and ensuring optimal performance.", category: "Petrol Filters", price: 6000 },
    // ];

    // const filtersDataObj = [
    //     { _id: 9, img: imagePaths['filterProduct1.png'], title: "Oil Filter", description: "Our Oil Filters ensure clean, contaminant-free oil flow, protecting your engine and enhancing performance. These filters are designed for maximum efficiency and longevity, making them an essential component for any vehicle.", category: "Oil Filters", price: 5600 },
    //     { _id: 10, img: imagePaths['filterProduct1.png'], title: "Diesel Filter", description: "Our Diesel Filters ensure clean, contaminant-free diesel flow, protecting your engine and enhancing performance. These filters are designed for maximum efficiency and longevity, making them an essential component for any vehicle.", category: "Diesel Filters", price: 5600 },
    //     { _id: 11, img: imagePaths['filterProduct1.png'], title: "Air Filter", description: "Ensure your engine breathes easy with our superior Air Filters. They provide excellent filtration to keep your engine running smoothly and efficiently by preventing dust and debris ingress. With these filters, your engine's performance and longevity are significantly improved.", category: "Air Filters", price: 5600 },
    //     { _id: 12, img: imagePaths['filterProduct1.png'], title: "AC Filter", description: "Our high-efficiency AC Filters improve air quality inside your vehicle by trapping dust, pollen, and other pollutants. These filters ensure a healthier and more comfortable ride for you and your passengers, making every journey more enjoyable.", category: "AC Filters", price: 5600 },
    //     { _id: 13, img: imagePaths['filterProduct1.png'], title: "Petrol Filter", description: "Top-quality Petrol Filters designed to maintain pure and efficient fuel delivery. These filters protect your engine from contaminants, ensuring optimal performance and extending the life of your vehicle. Perfect for maintaining engine health and performance.", category: "Petrol Filters", price: 5600 },
    //     { _id: 14, img: imagePaths['filterProduct1.png'], title: "Oil/Diesel Filter", description: "Our Oil and Diesel Filters ensure clean, contaminant-free fuel flow, protecting your engine and enhancing performance. These filters are designed for maximum efficiency and longevity, making them an essential component for any vehicle.", category: "Oil/Diesel Filters", price: 5600 },
    //     { _id: 15, img: imagePaths['filterProduct1.png'], title: "Air Filters", description: "Our superior Air Filters ensure your engine breathes easy. They provide excellent filtration to keep your engine running smoothly and efficiently by preventing dust and debris ingress, significantly improving your engine's performance and longevity.", category: "Air Filters", price: 5600 },
    //     { _id: 16, img: imagePaths['filterProduct1.png'], title: "AC Filters", description: "Our high-efficiency AC Filters improve air quality inside your vehicle by trapping dust, pollen, and other pollutants. These filters ensure a healthier and more comfortable ride for you and your passengers, making every journey more enjoyable.", category: "AC Filters", price: 5600 },
    // ];

    // const shopDataObj = [
    //     {
    //         _id: 17,
    //         img: imagePaths['filterProduct1.png'],
    //         title: "New Oil Filter",
    //         description: "Our Oil Filters ensure clean, contaminant-free oil flow, protecting your engine and enhancing performance. These filters are designed for maximum efficiency and longevity, making them an essential component for any vehicle.",
    //         category: "Oil Filters",
    //         price: 5600
    //     },
    //     {
    //         _id: 18,
    //         img: imagePaths['filterProduct1.png'],
    //         title: "New Diesel Filter",
    //         description: "Our Diesel Filters ensure clean, contaminant-free diesel flow, protecting your engine and enhancing performance. These filters are designed for maximum efficiency and longevity, making them an essential component for any vehicle.",
    //         category: "Diesel Filters",
    //         price: 5600
    //     },
    // ];

    // const [shopData, setShopData] = useState(shopDataObj);

    // _____________________________API___________________________________________

    const host = "http://localhost:5000";

    const initialProducts = [];
    const initialBestProducts = [];
    const initialPopulerProducts = [];

    const [products, setProducts] = useState(initialProducts)

    const [bestSellingData, setBestSellingData] = useState(initialBestProducts)

    const [filtersData, setFiltersData] = useState(initialPopulerProducts)

    // Error handling
    const catchError = (error) => {
        console.log(error)
    }

    // Get all products
    const getProducts = async () => {
        // API Call ↓
        try {
            const response = await fetch(`${host}/products/`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            });
            if (!response.ok) {
                throw new Error(`${response}`);
            }
            const data = await response.json();

            // const sortedData = data.sort((a, b) => new Date(b.date) - new Date(a.date));
            setProducts(data)
            // console.log(data)
            // handleError(false)
        } catch (error) {
            catchError(error);
        }
    }

    // Get Best Selling products
    const bestProducts = async () => {
        // API Call ↓
        try {
            const response = await fetch(`${host}/products/best-selling`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            });
            if (!response.ok) {
                throw new Error(`${response}`);
            }
            const data = await response.json();

            setBestSellingData(data)
            // console.log(data)
            // handleError(false)
        } catch (error) {
            catchError(error);
        }
    }
    // bestProducts();

    // Get Populer Selling products
    const populerProducts = async () => {
        // API Call ↓
        try {
            const response = await fetch(`${host}/products/popular`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            });
            if (!response.ok) {
                throw new Error(`${response}`);
            }
            const data = await response.json();

            setFiltersData(data)
            // console.log(data)
            // handleError(false)
        } catch (error) {
            catchError(error);
        }
    }
    // populerProducts();

    return (
        <DataContext.Provider value={{
            bestSellingData,
            filtersData,
            products,
            // shopData,
            // setShopData,

            host,
            getProducts,
            bestProducts,
            populerProducts,


        }}>
            {props.children}
        </DataContext.Provider>
    )
}