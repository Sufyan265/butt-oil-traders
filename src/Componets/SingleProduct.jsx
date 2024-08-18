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
                                        Specifications
                                    </a>
                                </li>
                                <li className="nav-item d-flex" role="presentation">
                                    <a className="nav-link d-flex align-items-center justify-content-center w-100" id="ex1-tab-2" data-mdb-toggle="pill" href="#ex1-pills-2" role="tab" aria-controls="ex1-pills-2" aria-selected="false">
                                        Warranty Information
                                    </a>
                                </li>
                                <li className="nav-item d-flex" role="presentation">
                                    <a className="nav-link d-flex align-items-center justify-content-center w-100" id="ex1-tab-3" data-mdb-toggle="pill" href="#ex1-pills-3" role="tab" aria-controls="ex1-pills-3" aria-selected="false">
                                        Shipping Information
                                    </a>
                                </li>
                                <li className="nav-item d-flex" role="presentation">
                                    <a className="nav-link d-flex align-items-center justify-content-center w-100" id="ex1-tab-4" data-mdb-toggle="pill" href="#ex1-pills-4" role="tab" aria-controls="ex1-pills-4" aria-selected="false">
                                        Seller Profile
                                    </a>
                                </li>
                            </ul>
                            <div className="tab-content" id="ex1-content">
                                <div className="tab-pane fade show active" id="ex1-pills-1" role="tabpanel" aria-labelledby="ex1-tab-1">
                                    <p>
                                        Discover the unparalleled quality and performance of our products. Designed to meet the rigorous demands of modern vehicles, each item is crafted with precision to ensure optimal engine performance and longevity.
                                    </p>
                                    <div className="row mb-2">
                                        <div className="col-12 col-md-6">
                                            <ul className="list-unstyled mb-0">
                                                <li>
                                                    <i className="fas fa-check text-success me-2"></i> High-performance formula
                                                </li>
                                                <li>
                                                    <i className="fas fa-check text-success me-2"></i> Superior engine protection
                                                </li>
                                                <li>
                                                    <i className="fas fa-check text-success me-2"></i> Advanced anti-wear technology
                                                </li>
                                                <li>
                                                    <i className="fas fa-check text-success me-2"></i> Enhanced fuel efficiency
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-12 col-md-6 mb-0">
                                            <ul className="list-unstyled">
                                                <li>
                                                    <i className="fas fa-check text-success me-2"></i> Exceptional thermal stability
                                                </li>
                                                <li>
                                                    <i className="fas fa-check text-success me-2"></i> Long-lasting engine cleanliness
                                                </li>
                                                <li>
                                                    <i className="fas fa-check text-success me-2"></i> Compatible with all modern vehicles
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <table className="table border mt-3 mb-2">
                                        <tbody>
                                            <tr>
                                                <th className="py-2">Viscosity:</th>
                                                <td className="py-2">SAE 5W-30</td>
                                            </tr>
                                            <tr>
                                                <th className="py-2">Performance Level:</th>
                                                <td className="py-2">API SN/CF</td>
                                            </tr>
                                            <tr>
                                                <th className="py-2">Package Size:</th>
                                                <td className="py-2">1L, 4L, 5L</td>
                                            </tr>
                                            <tr>
                                                <th className="py-2">Suitable Engines:</th>
                                                <td className="py-2">Gasoline, Diesel</td>
                                            </tr>
                                            <tr>
                                                <th className="py-2">Additives:</th>
                                                <td className="py-2">Detergent, Dispersant</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="tab-pane fade mb-2" id="ex1-pills-2" role="tabpanel" aria-labelledby="ex1-tab-2">
                                    <p>
                                        At Butt Oil Traders, we stand firmly behind the quality and durability of our products. Every product you purchase from us is covered by a comprehensive warranty that reflects our commitment to excellence and your satisfaction.
                                    </p>
                                    <p>
                                        Our warranty coverage ensures that if you encounter any defects in material or workmanship, we will either replace the product or provide a full refund, subject to the terms outlined in our warranty policy. This warranty applies to all products used under normal conditions, and it covers a specific duration based on the type of product purchased.
                                    </p>
                                    <p>
                                        For Engine Oils, Gear Oils, and other lubricants, our warranty guarantees performance and protection for a specified number of miles or months, whichever comes first. Should you notice any issues related to the product’s effectiveness, such as unusual engine noise or reduced performance, please contact us immediately for a detailed inspection.
                                    </p>
                                    <p>
                                        We also offer extended warranty options for select products, providing additional peace of mind. This extended warranty can be purchased at the time of sale and offers continued coverage beyond the standard warranty period. For more details, please refer to the product packaging or contact our customer service team, who are always ready to assist you with any inquiries.
                                    </p>
                                    <p>
                                        Remember, proper usage and maintenance of the products are crucial for maintaining warranty coverage. Please follow all instructions and guidelines provided with the product to ensure optimal performance and longevity. For more information on warranty claims, procedures, or terms, please visit our warranty information page or contact us directly.
                                    </p>
                                </div>
                                <div className="tab-pane fade mb-2" id="ex1-pills-3" role="tabpanel" aria-labelledby="ex1-tab-3">
                                    <p>
                                        At Butt Oil Traders, we understand the importance of timely and reliable delivery, ensuring that you receive your products in perfect condition and as quickly as possible. Our shipping process is designed to be efficient, transparent, and customer-focused, providing you with peace of mind from the moment you place your order until it arrives at your doorstep.
                                    </p>
                                    <p>
                                        We partner with leading logistics providers to offer fast and secure shipping across the country. Orders are typically processed within 24 hours on business days, and you will receive a confirmation email with tracking information as soon as your order is dispatched. This allows you to monitor your shipment in real-time and stay informed about its expected delivery date.
                                    </p>
                                    <p>
                                        We offer multiple shipping options to cater to your needs, including standard, expedited, and express delivery services. The shipping costs and estimated delivery times will vary based on your location and the chosen shipping method. Our website automatically calculates the most accurate shipping costs at checkout, ensuring complete transparency with no hidden fees.
                                    </p>
                                    <p>
                                        For international customers, we provide worldwide shipping to most destinations. International orders may be subject to customs duties, taxes, and import fees, which are the responsibility of the buyer. We recommend checking with your local customs office for more information on potential additional charges.
                                    </p>
                                    <p>
                                        In the unlikely event of shipping delays or issues, our customer service team is available to assist you. We work closely with our shipping partners to resolve any problems quickly and efficiently, ensuring that your experience with Butt Oil Traders is nothing short of excellent. For more details on our shipping policies, including returns and exchanges, please visit our shipping information page.
                                    </p>
                                </div>
                                <div className="tab-pane fade mb-2" id="ex1-pills-4" role="tabpanel" aria-labelledby="ex1-tab-4">
                                    <p>
                                        Butt Oil Traders is a leading name in the automotive industry, dedicated to providing high-quality lubricants and automotive products that meet the needs of our customers. Our journey began with a passion for innovation and a commitment to delivering exceptional products that enhance the performance and longevity of vehicles.
                                    </p>
                                    <p>
                                        Over the years, we have built a reputation for reliability, integrity, and customer satisfaction. Our team of experts is continually researching and developing new products that push the boundaries of technology and performance. We believe in offering only the best to our customers, which is why we carefully select and rigorously test every product before it reaches the market.
                                    </p>
                                    <p>
                                        At Butt Oil Traders, customer service is at the heart of everything we do. We are committed to providing an outstanding shopping experience, from browsing our extensive product range to receiving your order and beyond. Our knowledgeable and friendly customer support team is always ready to assist you with any questions or concerns, ensuring that your experience with us is smooth and hassle-free.
                                    </p>
                                    <p>
                                        We also value the relationships we build with our customers and the trust they place in us. That’s why we strive to maintain the highest standards of transparency and professionalism in all our dealings. Whether you’re a first-time buyer or a long-time customer, you can count on Butt Oil Traders to deliver the products and service you need to keep your vehicle running at its best.
                                    </p>
                                    <p>
                                        Learn more about our mission, values, and the team behind Butt Oil Traders on our profile page. We look forward to serving you and helping you achieve optimal performance for your vehicle with our top-quality products.
                                    </p>
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