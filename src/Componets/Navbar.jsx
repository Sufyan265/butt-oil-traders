import React, { useContext, useEffect, useState } from 'react'
import "./Styles/App.css"
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import logo_t_sm from '../../public/Images/logo-transparent-sm.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import ContextApi from '../Context/ContextApi';
import { UserContext } from '../Context/UserContext';

const Navbar = () => {
    const { totalItems } = useContext(ContextApi);
    const { userData, logout, getUser } = useContext(UserContext);

    // const admintoken = import.meta.env.VITE_ADMIN_TOKEN;

    // const isAdmin = localStorage.getItem('isAdmin');

    const tooltip = (
        <Tooltip id="tooltip-example">Cart</Tooltip>
    );

    // const navigate = useNavigate();
    const token = localStorage.getItem("token");
    useEffect(() => {
        if (token) {
            getUser();
        }
    }, [token])

    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg fixed-top navbarStyle" data-bs-theme="light">
                    <div className="container">
                        <Link to="/" onClick={() => window.scrollTo({ top: 0 })} className="navbar-brand mx-auto brandName">
                            <img src={logo_t_sm} alt="logo" />
                            {/* <span className="navbar-brand ">Butt Oil Traders</span> */}
                            Butt Oil Traders
                        </Link>


                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav m-auto mb-2 mb-lg-0 navbarItems">
                                <li className="nav-item">
                                    <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/shop" className={`nav-link ${location.pathname === '/shop' ? 'active' : ''}`} onClick={() => window.scrollTo({ top: 0 })}>Shop</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} onClick={() => window.scrollTo({ top: 0 })}>About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} onClick={() => window.scrollTo({ top: 0 })}>Contact Us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/refundpolicy" className={`nav-link ${location.pathname === '/refundpolicy' ? 'active' : ''}`} onClick={() => window.scrollTo({ top: 0 })}>Refund Policy</Link>
                                </li>
                            </ul>

                            {userData.user && userData.user.isAdmin && (
                                <Link to="/admin" onClick={() => window.scrollTo({ top: 0 })}>
                                    <button type="button" className="btn btn-outline-dark cart-btn mx-2" id='admin_btn'>
                                        Admin
                                    </button>
                                </Link>
                            )}

                            <div className="userContainer d-flex flex-row align-items-center ">
                                <Link to="/cart" onClick={() => window.scrollTo({ top: 0 })}>
                                    <OverlayTrigger placement="bottom" overlay={tooltip}>
                                        <button type="button" className="btn btn-outline-dark cart-btn">
                                            <FontAwesomeIcon icon={faShoppingCart} />
                                            <span>{totalItems}</span>
                                        </button>
                                    </OverlayTrigger>
                                </Link>


                                {/* <Link to={!isAdmin ? "/adminlogin" : "/admin"} className="nav-link profileIcon" role="button">
                                    <FontAwesomeIcon icon={faUser} />
                                </Link> */}

                                <ul className="navbar-nav mb-2 mb-lg-0 profileIcon">
                                    <li className="nav-item dropdown">
                                        <a href="#!" className="nav-link dropdown-toggle" id="userDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <FontAwesomeIcon icon={faUser} />
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                                            {localStorage.getItem("token") ? (
                                                <>
                                                    <li className="dropdown-item userDataStyle">{userData.user.name}</li>
                                                    <li className="dropdown-item userDataStyle">{userData.user.email}</li>
                                                    <li>
                                                        <button className="dropdown-item mt-3" style={{ backgroundColor: "#a30000", color: 'white' }} onClick={logout}><FontAwesomeIcon icon={faArrowRightFromBracket} /> Logout</button>
                                                    </li>
                                                </>
                                            ) : (
                                                <>
                                                    <li>
                                                        <Link to="/login" className="dropdown-item" onClick={() => window.scrollTo({ top: 0 })}>
                                                            Login
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/signup" className="dropdown-item" onClick={() => window.scrollTo({ top: 0 })}>
                                                            Sign Up
                                                        </Link>
                                                    </li>
                                                </>
                                            )}
                                        </ul>
                                    </li>
                                </ul>



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
