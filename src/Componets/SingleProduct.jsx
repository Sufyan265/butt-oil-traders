import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../Context/DataContext';
import ContextApi from '../Context/ContextApi';
import { useParams } from 'react-router-dom';
import Loading from './Loading';


const ProductPage = () => {
    const { singleProduct, getSingleProducts } = useContext(DataContext);
    const { addToCart } = useContext(ContextApi);

    const [quantity, setQuantity] = useState(1);


    const { id } = useParams();

    useEffect(() => {
        if (id) {
            getSingleProducts(id);
            window.scrollTo(0, 0);
        }
    }, [id]);


    const handleQuantityChange = (amount) => {
        setQuantity(prevQuantity => Math.max(1, prevQuantity + amount));
    };

    const [isLoading, setIsLoading] = useState(true);

    // Handle image load event
    const handleImageLoad = () => {
        setIsLoading(false);
    };


    return (
        <>
            <section className="py-5 singleProduct">
                <div className="container">
                    <div className="row gx-5">
                        <aside className="col-lg-6">
                            <div className="border rounded-4 mb-3 d-flex justify-content-center h-100">

                                {isLoading && (
                                    <div className="loading-container" style={{ position: 'relative', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                                        <Loading size="25" />
                                    </div>
                                )}
                                <img
                                    src={singleProduct.img}
                                    alt="Loading..."
                                    onLoad={handleImageLoad}
                                    loading="lazy"
                                    className="rounded-4 fit"
                                    // style={{ display: isLoading ? 'none' : 'block'}}
                                    style={{
                                        maxWidth: '100%',
                                        maxHeight: '27rem',
                                        margin: 'auto',
                                        zIndex: isLoading ? -1 : 1,
                                    }}
                                />

                                {/* <img
                                    style={{ maxWidth: '100%', maxHeight: '27rem', margin: 'auto' }}
                                    className="rounded-4 fit"
                                    src={singleProduct.img}
                                    alt="Product"
                                /> */}
                            </div>
                        </aside>
                        <main className="col-lg-6">
                            <div className="ps-lg-3">
                                <h4 className="title text-dark">
                                    {singleProduct.title}
                                </h4>
                                <div className="d-flex flex-row my-3">
                                    <div className="text-warning mb-1 me-2">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fas fa-star-half-alt"></i>
                                        <span className="ms-1">4.5</span>
                                    </div>
                                    <span className="text-success ms-2">In stock</span>
                                </div>
                                <div className="mb-3">
                                    <span className="h5">Rs. {singleProduct.price}</span>
                                    <span className="text-muted">/per item</span>
                                </div>
                                <p className="text-muted">
                                    {singleProduct.description}
                                </p>
                                <div className="row">
                                    <dt className="col-3">Category:</dt>
                                    <dd className="col-9">{singleProduct.category}</dd>
                                    <dt className="col-3">Product Id</dt>
                                    <dd className="col-9">{singleProduct._id}</dd>
                                    <dt className="col-3">Brand</dt>
                                    <dd className="col-9">Normal</dd>
                                </div>
                                <hr />
                                <div className="row mb-4">
                                    <label className="mb-2 d-block">Quantity</label>
                                    <div className="input-group mb-3" style={{ width: '170px' }}>
                                        <button className="btn btn-white border border-secondary px-3" type="button" id="button-addon1" data-mdb-ripple-color="dark" onClick={() => handleQuantityChange(-1)}>
                                            <i className="fas fa-minus"></i>
                                        </button>
                                        <input type="text" className="form-control text-center border border-secondary" aria-label="quantity" aria-describedby="button-addon1" value={quantity} readOnly />
                                        <button className="btn btn-white border border-secondary px-3" type="button" id="button-addon2" data-mdb-ripple-color="dark" onClick={() => handleQuantityChange(1)}>
                                            <i className="fas fa-plus"></i>
                                        </button>
                                    </div>
                                </div>
                                <button className="btn btn-dark shadow-0 btnStyle" onClick={() => addToCart(singleProduct._id, quantity)}>
                                    <i className="me-1 fa fa-shopping-basket"></i> Add to cart
                                </button>
                            </div>
                        </main>
                    </div>
                </div>
            </section>
            <section className="bg-light border-top py-4 singleProduct">
                <div className="container">
                    <div className="row gx-4">
                        <div className="border rounded-2 px-3 py-2 bg-white">
                            <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                                <li className="nav-item d-flex" role="presentation">
                                    <a className="nav-link d-flex align-items-center justify-content-center w-100 active" id="ex1-tab-1" data-mdb-toggle="pill" href="#ex1-pills-1" role="tab" aria-controls="ex1-pills-1" aria-selected="true">
                                        Specification
                                    </a>
                                </li>
                                <li className="nav-item d-flex" role="presentation">
                                    <a className="nav-link d-flex align-items-center justify-content-center w-100" id="ex1-tab-2" data-mdb-toggle="pill" href="#ex1-pills-2" role="tab" aria-controls="ex1-pills-2" aria-selected="false">
                                        Warranty info
                                    </a>
                                </li>
                                <li className="nav-item d-flex" role="presentation">
                                    <a className="nav-link d-flex align-items-center justify-content-center w-100" id="ex1-tab-3" data-mdb-toggle="pill" href="#ex1-pills-3" role="tab" aria-controls="ex1-pills-3" aria-selected="false">
                                        Shipping info
                                    </a>
                                </li>
                                <li className="nav-item d-flex" role="presentation">
                                    <a className="nav-link d-flex align-items-center justify-content-center w-100" id="ex1-tab-4" data-mdb-toggle="pill" href="#ex1-pills-4" role="tab" aria-controls="ex1-pills-4" aria-selected="false">
                                        Seller profile
                                    </a>
                                </li>
                            </ul>
                            <div className="tab-content" id="ex1-content">
                                <div className="tab-pane fade show active" id="ex1-pills-1" role="tabpanel" aria-labelledby="ex1-tab-1">
                                    <p>
                                        With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet,
                                        consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                        nulla pariatur.
                                    </p>
                                    <div className="row mb-2">
                                        <div className="col-12 col-md-6">
                                            <ul className="list-unstyled mb-0">
                                                <li>
                                                    <i className="fas fa-check text-success me-2"></i>Some great feature name here
                                                </li>
                                                <li>
                                                    <i className="fas fa-check text-success me-2"></i>Lorem ipsum dolor sit amet, consectetur
                                                </li>
                                                <li>
                                                    <i className="fas fa-check text-success me-2"></i>Duis aute irure dolor in reprehenderit
                                                </li>
                                                <li>
                                                    <i className="fas fa-check text-success me-2"></i>Optical heart sensor
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-12 col-md-6 mb-0">
                                            <ul className="list-unstyled">
                                                <li>
                                                    <i className="fas fa-check text-success me-2"></i>Easy fast and ver good
                                                </li>
                                                <li>
                                                    <i className="fas fa-check text-success me-2"></i>Some great feature name here
                                                </li>
                                                <li>
                                                    <i className="fas fa-check text-success me-2"></i>Modern style and design
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <table className="table border mt-3 mb-2">
                                        <tbody>
                                            <tr>
                                                <th className="py-2">Display:</th>
                                                <td className="py-2">13.3-inch LED-backlit display with IPS</td>
                                            </tr>
                                            <tr>
                                                <th className="py-2">Processor capacity:</th>
                                                <td className="py-2">2.3GHz dual-core Intel Core i5</td>
                                            </tr>
                                            <tr>
                                                <th className="py-2">Camera quality:</th>
                                                <td className="py-2">720p FaceTime HD camera</td>
                                            </tr>
                                            <tr>
                                                <th className="py-2">Memory:</th>
                                                <td className="py-2">8 GB RAM or 16 GB RAM</td>
                                            </tr>
                                            <tr>
                                                <th className="py-2">Graphics:</th>
                                                <td className="py-2">Intel Iris Plus Graphics 640</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                                <div className="tab-pane fade mb-2" id="ex1-pills-2" role="tabpanel" aria-labelledby="ex1-tab-2">
                                    Tab content or sample information now <br />
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                    officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                </div>
                                <div className="tab-pane fade mb-2" id="ex1-pills-3" role="tabpanel" aria-labelledby="ex1-tab-3">
                                    Another tab content or sample information now <br />
                                    Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                    deserunt
                                    mollit anim id est laborum.
                                </div>
                                <div className="tab-pane fade mb-2" id="ex1-pills-4" role="tabpanel" aria-labelledby="ex1-tab-4">
                                    Some other tab content or sample information now <br />
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                    officia deserunt mollit anim id est laborum.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProductPage;