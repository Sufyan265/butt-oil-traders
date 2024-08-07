import React from 'react';
import { Link } from 'react-router-dom';

const RefundPolicy = () => {
    return (
        <section className="container mt-5 refundSection">
            <div className="card shadow-lg border-0">
                <div className="card-body py-5 text-center">
                    <h2 className="mb-4 headingStyle">Refund Policy</h2>
                    <p className="text-muted"><strong>Effective Date: [Insert Date]</strong></p>

                    <h2 className="mt-5 text-dark">Eligibility for Refunds</h2>
                    <p className="text-muted">To be eligible for a refund, the following conditions must be met:</p>
                    <ul className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
                        <li>The item must be unused and in the same condition that you received it.</li>
                        <li>The item must be in its original packaging.</li>
                        <li>You must have the receipt or proof of purchase.</li>
                    </ul>

                    <h2 className="mt-5 text-dark">Non-Refundable Items</h2>
                    <p className="text-muted">Certain items are exempt from being returned:</p>
                    <ul className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
                        <li>Gift cards</li>
                        <li>Downloadable software products</li>
                        <li>Some health and personal care items</li>
                    </ul>

                    <h2 className="mt-5 text-dark">Refund Process</h2>
                    <p className="text-muted">To initiate a refund, please follow these steps:</p>
                    <ol className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
                        <li>Contact our customer support team at <a href="mailto:support@buttoiltraders.com" className="text-primary">support@buttoiltraders.com</a> within 30 days of your purchase.</li>
                        <li>Provide your order number, details of the product, and the reason for the refund request.</li>
                        <li>Our team will review your request and provide instructions on how to return the item.</li>
                    </ol>

                    <h2 className="mt-5 text-dark">Return Shipping</h2>
                    <ul className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
                        <li>You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable.</li>
                        <li>If you receive a refund, the cost of return shipping will be deducted from your refund.</li>
                    </ul>

                    <h2 className="mt-5 text-dark">Refund Approval</h2>
                    <p className="text-muted">Once your return is received and inspected, we will notify you of the approval or rejection of your refund:</p>
                    <ul className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
                        <li>If approved, your refund will be processed, and a credit will automatically be applied to your original method of payment within 7-10 business days.</li>
                        <li>If rejected, we will provide the reasons for the rejection and discuss alternative solutions if applicable.</li>
                    </ul>

                    <h2 className="mt-5 text-dark">Late or Missing Refunds</h2>
                    <p className="text-muted">If you haven’t received a refund yet:</p>
                    <ol className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
                        <li>Check your bank account again.</li>
                        <li>Contact your credit card company; it may take some time before your refund is officially posted.</li>
                        <li>Contact your bank. There is often some processing time before a refund is posted.</li>
                        <li>If you’ve done all of this and still have not received your refund, please contact us at <a href="mailto:support@buttoiltraders.com" className="text-primary">support@buttoiltraders.com</a>.</li>
                    </ol>

                    <h2 className="mt-5 text-dark">Exchanges</h2>
                    <p className="text-muted">We only replace items if they are defective or damaged. If you need to exchange it for the same item, contact us at <a href="mailto:support@buttoiltraders.com" className="text-primary">support@buttoiltraders.com</a> and follow the return instructions provided.</p>

                    <h2 className="mt-5 text-dark">Contact Us</h2>
                    <p className="text-muted">If you have any questions about our refund policy, please contact us:</p>
                    <ul className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
                        {/* <li><strong>Email:</strong> <a href="mailto:support@buttoiltraders.com" className="text-primary">support@buttoiltraders.com</a></li>
                        <li><strong>Phone:</strong> +1 (123) 456-7890</li> */}

                        <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <button className='btn btn-dark btnStyle'>Contact Us</button>
                        </Link>
                    </ul>

                    <p className="text-muted mt-4">Thank you for shopping with Butt Oil Traders. We value your business and strive to provide the best service possible.</p>
                </div>
            </div>
        </section>
    );
};

export default RefundPolicy;
