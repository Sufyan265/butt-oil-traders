import React, { useContext, useEffect, useState } from 'react'
import "./Styles/App.css"
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo_t_sm from '../../public/Images/logo-transparent-sm.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import ContextApi from '../Context/ContextApi';

const Navbar = () => {
    const { totalItems } = useContext(ContextApi);

    const tooltip = (
        <Tooltip id="tooltip-example">Cart</Tooltip>
    );

    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg fixed-top navbarStyle" data-bs-theme="light">
                    <div className="container">
                        <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="navbar-brand">
                            {/* <a className="navbar-brand" href="#"> */}
                            <img src={logo_t_sm} alt="logo" />
                            {/* </a> */}
                            <span className="navbar-brand mx-auto brandName" href="#">Butt Oil Traders</span>
                        </Link>


                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav m-auto mb-2 mb-lg-0 navbarItems">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/shop" className="nav-link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Shop</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/about" className="nav-link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contact" className="nav-link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Contact Us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/refundpolicy" className="nav-link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Refund Policy</Link>
                                </li>
                            </ul>


                            <div className="userContainer">
                                <Link to="/cart" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                                    <OverlayTrigger placement="bottom" overlay={tooltip}>
                                        <button type="button" className="btn btn-outline-dark cart-btn">
                                            <FontAwesomeIcon icon={faShoppingCart} />
                                            <span>{totalItems}</span>
                                        </button>
                                    </OverlayTrigger>
                                </Link>


                                {/* <ul className="navbar-nav mb-2 mb-lg-0 profileIcon">
                                    <li className="nav-item dropdown">
                                        <a href="!#" className="nav-link dropdown-toggle" data-toggle="dropdown" id="userDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <FontAwesomeIcon icon={faUser} />
                                        </a>
                                        <ul
                                            className="dropdown-menu dropdown-menu-end"
                                            aria-labelledby="userDropdown"
                                        >
                                            <li>
                                                <Link to="/" className="dropdown-item">
                                                    Login
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/" className="dropdown-item">
                                                    Sign Up
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul> */}
                            </div>

                        </div>
                    </div>
                </nav>
            </header>
            {/* <a href="{whatsappLink}" className="whatsapp-icon" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-whatsapp"></i>
            </a> */}


        </>
    )
}

export default Navbar
