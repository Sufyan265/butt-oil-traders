import React from 'react';
import "../Styles/userStyle.css";
import logo_t_sm from '../../../public/Images/logo-transparent-sm.png';
import signupImg from '../../../public/Images/signup.jpg'; 
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <section className="vh-90 signupPage" style={{ backgroundColor: 'rgb(255 203 92)' }}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-10">
                        <div className="card" style={{ borderRadius: '1rem' }}>
                            <div className="row g-0 align-items-center">
                                <div className="col-md-6 col-lg-5 d-none d-md-block img-container">
                                    <img
                                        src={signupImg}
                                        alt="signup form"
                                        className="img-fluid"
                                        style={{ borderRadius: '1rem 0 0 1rem'}}
                                        loading="lazy"
                                    />
                                </div>
                                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                    <div className="card-body p-4 p-lg-5 text-black">
                                        <form>
                                            <div className="d-flex align-items-center mb-3 pb-1">
                                                <img
                                                    className="logo"
                                                    src={logo_t_sm}
                                                    alt="logo"
                                                    loading="lazy"
                                                />
                                                <span className="h1 fw-bold mb-0">Butt Oil Traders</span>
                                            </div>

                                            <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>
                                                Create your account
                                            </h5>

                                            <div data-mdb-input-init className="form-outline mb-4">
                                                <label className="form-label" htmlFor="formName">
                                                    Name
                                                </label>
                                                <input
                                                    type="text"
                                                    id="formName"
                                                    className="form-control py-2"
                                                    autoComplete="name"
                                                />
                                            </div>

                                            <div data-mdb-input-init className="form-outline mb-4">
                                                <label className="form-label" htmlFor="formEmail">
                                                    Email address
                                                </label>
                                                <input
                                                    type="email"
                                                    id="formEmail"
                                                    className="form-control py-2"
                                                    autoComplete="email"
                                                />
                                            </div>

                                            <div data-mdb-input-init className="form-outline mb-4">
                                                <label className="form-label" htmlFor="formPassword">
                                                    Password
                                                </label>
                                                <input
                                                    type="password"
                                                    id="formPassword"
                                                    className="form-control py-2"
                                                    autoComplete="new-password"
                                                />
                                            </div>

                                            <div data-mdb-input-init className="form-outline mb-4">
                                                <label className="form-label" htmlFor="formConfirmPassword">
                                                    Confirm Password
                                                </label>
                                                <input
                                                    type="password"
                                                    id="formConfirmPassword"
                                                    className="form-control py-2"
                                                    autoComplete="new-password"
                                                />
                                            </div>

                                            <div className="pt-1 mb-4">
                                                <button
                                                    data-mdb-button-init
                                                    data-mdb-ripple-init
                                                    className="btn btn-dark btn-block btnStyle"
                                                    type="button"
                                                >
                                                    Sign Up
                                                </button>
                                            </div>
                                            <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>
                                                Already have an account?{' '}
                                                <Link to="/login" style={{ color: 'var(--primaryColor)' }}>
                                                    Login here
                                                </Link>
                                            </p>
                                            <p className="small text-muted">
                                                Terms of use. Privacy policy
                                            </p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Signup;
