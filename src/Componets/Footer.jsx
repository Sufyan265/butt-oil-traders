import React from 'react'
import "./Styles/footer.css"
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer-content">
                    <h3>Butt Oil Traders</h3>
                    <p>Your trusted source for high-quality car engine oils and filters. We offer a wide range of products including Engine Oil, Gear Oil, Power Oil, Compressor Oil, Oil/Diesel Filters, Air Filters, AC Filter, and Petrol Filter to keep your vehicle running smoothly. Quality you can rely on, service you can trust.</p>
                    <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <button className='btn btn-dark btnStyle'>Contact Us</button>
                    </Link>
                </div>
                <div className="footer-bottom">
                    <p className='copyright'>copyright &copy; <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="nav-link">Butt Oil Traders </Link> | Designed by <a href="https://sufyan.me/" target="_blank" rel="noreferrer">Muhammad Sufyan</a>
                    </p>

                    <div className="footer-menu">
                        <ul className="f-menu">
                            <li className="nav-item">
                                <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="nav-link">Home</Link>
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
                    </div>
                </div>

            </footer>
        </>
    )
}

export default Footer
