import React, { lazy, Suspense, useContext, useEffect } from 'react';
// import ContextApi from '../Context/ContextApi';
import { DataContext } from '../Context/DataContext';

import LandingSection from './LandingSection';
import Products from './Products';
import PopularOil from './PopularOil';
import Team from './Team';
import Testimonials from './Testimonials';
import Hero from './Hero';
import Carousel from './Carousel';

// import Loading from './Loading';

// Lazy load the components
// const LandingSection = lazy(() => import('./LandingSection'));
// const Products = lazy(() => import('./Products'));
// const PopularOil = lazy(() => import('./PopulerOil'));
// const Team = lazy(() => import('./Team'));
// const Testimonials = lazy(() => import('./Testimonials'));
// const Hero = lazy(() => import('./Hero'));

const Home = () => {
    const { bestSellingData, filtersData, getProducts, bestProducts, populerProducts, } = useContext(DataContext);

    useEffect(() => {
            // getProducts();
            bestProducts();
            populerProducts();
    }, []);

    return (
        <>
            <LandingSection />
            <Products data={bestSellingData} heading="Best Selling Products" subHeading="Popular Products" />
            <Hero />
            {/* <Suspense fallback={<Loading height="70vh" size="40" />}> */}
            <Products data={filtersData} heading="Car Filters" subHeading="Trending Now" />
            {/* </Suspense> */}
            <Testimonials />
            <Carousel />
            <PopularOil />
            <Team />
        </>
    )
}

export default Home;
