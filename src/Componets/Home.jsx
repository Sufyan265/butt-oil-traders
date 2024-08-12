import React, { useContext, lazy, Suspense } from 'react';
import ContextApi from '../Context/ContextApi';
import Loading from './Loading'; // Use the loading component for Suspense fallback

// Lazy load the components
const LandingSection = lazy(() => import('./LandingSection'));
const Products = lazy(() => import('./Products'));
const PopularOil = lazy(() => import('./PopulerOil'));
const Team = lazy(() => import('./Team'));
const Testimonials = lazy(() => import('./Testimonials'));
const Hero = lazy(() => import('./Hero'));

const Home = () => {
    const { bestSellingData, filtersData } = useContext(ContextApi);
    return (
        <>
            <Suspense fallback={<Loading />}>
                <LandingSection />
            </Suspense>
            <Suspense fallback={<Loading />}>
                <Products data={bestSellingData} heading="Best Selling Products" subHeading="Popular Products" />
            </Suspense>
            <Suspense fallback={<Loading />}>
                <Hero />
            </Suspense>
            <Suspense fallback={<Loading />}>
                <Products data={filtersData} heading="Car Filters" subHeading="Trending Now" />
            </Suspense>
            <Suspense fallback={<Loading />}>
                <Testimonials />
            </Suspense>
            <Suspense fallback={<Loading />}>
                <PopularOil />
            </Suspense>
            <Suspense fallback={<Loading />}>
                <Team />
            </Suspense>
        </>
    )
}

export default Home;
