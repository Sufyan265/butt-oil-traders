import React, { useContext } from 'react'
import LandingSection from './LandingSection';
import Products from './Products';
import PopularOil from './PopulerOil';
import ContextApi from '../Context/ContextApi';


const Home = () => {
    const { bestSellingData, filtersData } = useContext(ContextApi);
    return (
        <>
            <LandingSection />
            <Products data={bestSellingData} heading="Best Selling Products" subHeading="Popular Products" />
            <PopularOil />
            {/* <Filters data={filtersData} heading="Car Filters" subHeading="Trending Now" /> */}
            <Products data={filtersData} heading="Car Filters" subHeading="Trending Now" />

        </>
    )
}

export default Home
