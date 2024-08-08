import React, { createContext } from 'react';

export const DataContext = createContext();

export const DataProvider = (props) => {

    const images = import.meta.glob([
        '../../public/Images/*.png',
        '../../public/Images/*.jpg',
        '../../public/Images/*.jpeg',
        '../../public/Images/*.gif',
        '../../public/Images/*.svg'
    ], { eager: true });

    // Create an object with image URLs
    const imagePaths = Object.keys(images).reduce((acc, path) => {
        const imageName = path.replace('../../public/Images/', '');
        acc[imageName] = images[path].default || images[path];
        return acc;
    }, {});


    const bestSellingData = [
        { id: 1, img: imagePaths['product1.png'], title: "Premium Engine Oil", desc: "Our Premium Engine Oil provides high-performance protection and lubrication, ensuring your engine runs smoothly under all conditions. Perfect for those who demand the best for their vehicles.", category: "Engine Oil", price: 2000 },
        { id: 2, img: imagePaths['populerOil.jpg'], title: "Synthetic Gear Oil", desc: "Experience the advanced formulation of our Synthetic Gear Oil, which offers superior lubrication and wear protection, ensuring your gear system operates efficiently and reliably.", category: "Gear Oil", price: 4000 },
        { id: 3, img: imagePaths['product1.png'], title: "Hydraulic Power Oil", desc: "Our Hydraulic Power Oil is designed for optimal power transfer and control, providing reliable performance and long-lasting protection for all your hydraulic systems.", category: "Power Oil", price: 9000 },
        { id: 4, img: imagePaths['product3.png'], title: "Compressor Oil", desc: "Keep your compressors running at peak efficiency with our high-quality Compressor Oil, which enhances performance and extends the lifespan of your compressor units.", category: "Compressor Oil", price: 500 },
        { id: 5, img: imagePaths['product4.png'], title: "Oil/Diesel Filter", desc: "Our Oil and Diesel Filters ensure clean, contaminant-free fuel flow, protecting your engine and enhancing performance. These filters are designed for maximum efficiency and longevity.", category: "Oil/Diesel Filters", price: 2000 },
        { id: 6, img: imagePaths['product1.png'], title: "Air Filter", desc: "Ensure your engine breathes easy with our superior Air Filters. They provide excellent filtration to keep your engine running smoothly and efficiently by preventing dust and debris ingress.", category: "Air Filters", price: 11000 },
        { id: 7, img: imagePaths['product1.png'], title: "AC Filter", desc: "Our high-efficiency AC Filters improve air quality inside your vehicle by trapping dust, pollen, and other pollutants, ensuring a healthier and more comfortable ride for you and your passengers.", category: "AC Filters", price: 1000 },
        { id: 8, img: imagePaths['product1.png'], title: "Petrol Filter", desc: "Top-quality Petrol Filters designed to maintain pure and efficient fuel delivery, protecting your engine from contaminants and ensuring optimal performance.", category: "Petrol Filters", price: 6000 },
    ];

    const filtersData = [
        { id: 9, img: imagePaths['filterProduct1.png'], title: "Oil Filter", desc: "Our Oil Filters ensure clean, contaminant-free oil flow, protecting your engine and enhancing performance. These filters are designed for maximum efficiency and longevity, making them an essential component for any vehicle.", category: "Oil Filters", price: 5600 },
        { id: 10, img: imagePaths['filterProduct1.png'], title: "Diesel Filter", desc: "Our Diesel Filters ensure clean, contaminant-free diesel flow, protecting your engine and enhancing performance. These filters are designed for maximum efficiency and longevity, making them an essential component for any vehicle.", category: "Diesel Filters", price: 5600 },
        { id: 11, img: imagePaths['filterProduct1.png'], title: "Air Filter", desc: "Ensure your engine breathes easy with our superior Air Filters. They provide excellent filtration to keep your engine running smoothly and efficiently by preventing dust and debris ingress. With these filters, your engine's performance and longevity are significantly improved.", category: "Air Filters", price: 5600 },
        { id: 12, img: imagePaths['filterProduct1.png'], title: "AC Filter", desc: "Our high-efficiency AC Filters improve air quality inside your vehicle by trapping dust, pollen, and other pollutants. These filters ensure a healthier and more comfortable ride for you and your passengers, making every journey more enjoyable.", category: "AC Filters", price: 5600 },
        { id: 13, img: imagePaths['filterProduct1.png'], title: "Petrol Filter", desc: "Top-quality Petrol Filters designed to maintain pure and efficient fuel delivery. These filters protect your engine from contaminants, ensuring optimal performance and extending the life of your vehicle. Perfect for maintaining engine health and performance.", category: "Petrol Filters", price: 5600 },
        { id: 14, img: imagePaths['filterProduct1.png'], title: "Oil/Diesel Filter", desc: "Our Oil and Diesel Filters ensure clean, contaminant-free fuel flow, protecting your engine and enhancing performance. These filters are designed for maximum efficiency and longevity, making them an essential component for any vehicle.", category: "Oil/Diesel Filters", price: 5600 },
        { id: 15, img: imagePaths['filterProduct1.png'], title: "Air Filters", desc: "Our superior Air Filters ensure your engine breathes easy. They provide excellent filtration to keep your engine running smoothly and efficiently by preventing dust and debris ingress, significantly improving your engine's performance and longevity.", category: "Air Filters", price: 5600 },
        { id: 16, img: imagePaths['filterProduct1.png'], title: "AC Filters", desc: "Our high-efficiency AC Filters improve air quality inside your vehicle by trapping dust, pollen, and other pollutants. These filters ensure a healthier and more comfortable ride for you and your passengers, making every journey more enjoyable.", category: "AC Filters", price: 5600 },
    ];

    const shopData = [
        ...bestSellingData,
        ...filtersData,
        { id: 17, img: imagePaths['filterProduct1.png'], title: "New Oil Filter", desc: "Our Oil Filters ensure clean, contaminant-free oil flow, protecting your engine and enhancing performance. These filters are designed for maximum efficiency and longevity, making them an essential component for any vehicle.", category: "Oil Filters", price: 5600 },
        { id: 18, img: imagePaths['filterProduct1.png'], title: "New Diesel Filter", desc: "Our Diesel Filters ensure clean, contaminant-free diesel flow, protecting your engine and enhancing performance. These filters are designed for maximum efficiency and longevity, making them an essential component for any vehicle.", category: "Diesel Filters", price: 5600 },
    ];



    return (
        <DataContext.Provider value={{
            bestSellingData,
            filtersData,
            shopData,


        }}>
            {props.children}
        </DataContext.Provider>
    )
}