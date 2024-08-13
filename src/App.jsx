import React, { lazy, Suspense } from 'react';
import './Componets/Styles/App.css'
import './Componets/Styles/sectionStyle.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EcomFunctions from "./Context/EcomFunctions"
import { FormProvider } from "./Context/FormContext"
import { DataProvider } from "./Context/DataContext"
import StructuredData from './StructuredData';
import PrivateRoute from '../routes/PrivateRoute';
import Navbar from './Componets/Navbar'
import Footer from './Componets/Footer';
import Loading from './Componets/Loading';
// import Home from './Componets/Home';

// Lazy load components
const Home = lazy(() => import('./Componets/Home')); 
const About = lazy(() => import('./Componets/About'));
const Contact = lazy(() => import('./Componets/Contact'));
const RefundPolicy = lazy(() => import('./Componets/RefundPolicy'));
const Cart = lazy(() => import('./Componets/Cart'));
const CheckOut = lazy(() => import('./Componets/CheckOut'));
const Shop = lazy(() => import('./Componets/Shop'));
const NotFound = lazy(() => import('./Componets/NotFound'));
const AdminPage = lazy(() => import('./Componets/Admin/AdminPage'));
const AdminLogin = lazy(() => import('./Componets/Admin/AdminLogin'));
const Login = lazy(() => import('./Componets/User/Login'));
const Signup = lazy(() => import('./Componets/User/Signup'));

function App() {
  return (
    <>
      <Router basename="/butt-oil-traders">
        <DataProvider>
          <FormProvider>
            <EcomFunctions>
              <StructuredData />

              <Navbar />
              <div className="allSections">

                <Suspense fallback={<Loading height="70vh" size="40" />}>
                  <Routes key={location.pathname}>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/cart" element={<Cart />} />
                    <Route exact path="/checkout" element={<CheckOut />} />
                    <Route exact path="/shop" element={<Shop heading="Shop" subHeading="Explore Products" />} />
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/contact" element={<Contact />} />
                    <Route exact path="/refundpolicy" element={<RefundPolicy />} />
                    <Route path="/adminlogin" element={<AdminLogin />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/admin" element={<PrivateRoute><AdminPage /></PrivateRoute>} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Suspense>
              </div>
              <Footer />
            </EcomFunctions>
          </FormProvider>
        </DataProvider>
      </Router>
    </>
  );
}

export default App;
