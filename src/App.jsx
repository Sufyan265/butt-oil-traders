import './Componets/Styles/App.css'
import Navbar from './Componets/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EcomFunctions from "./Context/EcomFunctions"
import Home from './Componets/Home';
import About from './Componets/About';
import Contact from './Componets/Contact';
import RefundPolicy from './Componets/RefundPolicy';
import Footer from './Componets/Footer';
import Cart from './Componets/Cart';

function App() {

  return (
    <>
      <Router>
        <EcomFunctions>
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

              <Route exact path="/about" element={
                <About />
              } />

              <Route exact path="/contact" element={
                <Contact />
              } />

              <Route exact path="/refundpolicy" element={
                <RefundPolicy />
              } />

            </Routes>
          </div>
          
          <Footer />

        </EcomFunctions>
      </Router>
    </>
  )
}

export default App
