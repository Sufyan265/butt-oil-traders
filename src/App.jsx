import './Componets/Styles/App.css'
import './Componets/Styles/sectionStyle.css'
import Navbar from './Componets/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EcomFunctions from "./Context/EcomFunctions"
import { FormProvider } from "./Context/FormContext"
import { DataProvider } from "./Context/DataContext"
import Home from './Componets/Home';
import About from './Componets/About';
import Contact from './Componets/Contact';
import RefundPolicy from './Componets/RefundPolicy';
import Footer from './Componets/Footer';
import Cart from './Componets/Cart';
import CheckOut from './Componets/CheckOut';
import StructuredData from './StructuredData';
import Shop from './Componets/Shop';
import NotFound from './Componets/NotFound';


function App() {

  return (
    <>
      <Router basename="/butt-oil-traders">
        <DataProvider>
          <FormProvider>
            <EcomFunctions>
              <StructuredData />
              <Navbar />
              {/* <Home /> */}

              <div className="allSections">
                <Routes>
                  <Route exact path="/" element={
                    <Home />
                  } />

                  <Route exact path="/cart" element={
                    <Cart />
                  } />

                  <Route exact path="/checkout" element={
                    <CheckOut />
                  } />

                  <Route exact path="/shop" element={
                    <Shop heading="Shop" subHeading="Explore Products" />
                  } />

                  <Route exact path="/about" element={
                    <About />
                  } />

                  <Route exact path="/contact" element={
                    <Contact />
                  } />

                  <Route exact path="/refundpolicy" element={
                    <RefundPolicy />
                  } />

                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>

              <Footer />

            </EcomFunctions>
          </FormProvider>
        </DataProvider>
      </Router>
    </>
  )
}

export default App
