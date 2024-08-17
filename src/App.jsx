import React, { lazy, Suspense, useState, startTransition } from 'react';
import './Componets/Styles/App.css'
import './Componets/Styles/sectionStyle.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EcomFunctions from "./Context/EcomFunctions";
import { FormProvider } from "./Context/FormContext";
import { DataProvider } from "./Context/DataContext";
import { AdminProvider } from "./Context/AdminContext";
import StructuredData from './StructuredData';
import PrivateRoute from '../routes/PrivateRoute';
import Navbar from './Componets/Navbar'
import Footer from './Componets/Footer';
import Loading from './Componets/Loading';
import { UserProvider } from './Context/UserContext';
import Alert from './Componets/Alert';
import SingleProduct from './Componets/SingleProduct';

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

  const [alert, setAlert] = useState(null);
  const showAlert = (type, msg) => {
    setAlert({ msg, type, })
    setTimeout(() => { setAlert(null) }, 3000)
  }

  return (
    <>
      <Router basename="/butt-oil-traders">
        <UserProvider showAlert={showAlert}>
          <DataProvider>
            <AdminProvider>
              <FormProvider>
                <EcomFunctions>
                  <StructuredData />

                  <Navbar />
                  <div className="allSections">

                    <Alert alertText={alert} />

                    <Suspense fallback={<Loading height="70vh" size="40" />}>
                      <Routes key={location.pathname}>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/shop" element={<Shop heading="Shop" subHeading="Explore Products" />} />
                        <Route exact path="/product/:id" element={<SingleProduct />} />
                        <Route exact path="/cart" element={<Cart />} />
                        <Route exact path="/checkout" element={<CheckOut />} />
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
            </AdminProvider>
          </DataProvider>
        </UserProvider>
      </Router>
    </>
  );
}

export default App;