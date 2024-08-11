import React, { useContext, useRef, useState } from 'react';
import ContextApi from '../Context/ContextApi';
// import emailjs from 'emailjs-com';
import emailjs from '@emailjs/browser';

const CheckOut = () => {
    const formRef = useRef();

    const { cartItems, totalItemsCount, totalPrice } = useContext(ContextApi);
    const [result, setResult] = React.useState("Place Order");

    const [form, setForm] = useState({
        email: '',
        firstName: '',
        lastName: '',
        // companyName: '',
        country: 'PK',
        address: '',
        apartment: '',
        city: '',
        state: 'Punjab',
        zip: '',
        phone: '',
        notes: '',
        paymentMethod: 'cash on delivery'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };


    // Format cart items into a readable array of objects
    const formatCartItems = (items) => {
        return items.map(item => ({
            title: item.title,
            desc: item.desc,
            quantity: item.quantity,
            price: item.price
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formMessage = document.getElementById("order_message");
        formMessage.style.color = "white";
        setResult("Please Wait....");
        formMessage.classList.remove('disabled');

        const templateParams = {
            email: form.email,
            firstName: form.firstName,
            lastName: form.lastName,
            country: form.country,
            address: form.address,
            apartment: form.apartment,
            city: form.city,
            state: form.state,
            zip: form.zip,
            phone: form.phone,
            notes: form.notes,
            paymentMethod: form.paymentMethod,
            cartItems: formatCartItems(cartItems),
            totalItemsCount: totalItemsCount,
            totalPrice: totalPrice
        };

        try {
            await emailjs.send('service_anuuuvq', 'template_xxwqqoi', templateParams, '2lKqSLcLTPyA1zKIN');
            formMessage.style.backgroundColor = "green";
            setResult("Your Order has been placed Successfully!");
            formMessage.classList.add('disabled');
            // console.log('Order Successfully Placed!');
        } catch (error) {
            console.error('FAILED... Order Place', error);
            formMessage.style.color = "red";
            setResult("Failed... ", error.message);
        }

        setForm({
            email: '',
            firstName: '',
            lastName: '',
            // companyName: '',
            country: 'PK',
            address: '',
            apartment: '',
            city: '',
            state: 'Punjab',
            zip: '',
            phone: '',
            notes: '',
            paymentMethod: 'cash on delivery'
        })

    };

    // function to add commas to a price 
    function formatPrice(price) {
        const number = typeof price === 'string' ? parseFloat(price) : price;
        return number.toLocaleString('en-US');
    }
    return (
        <div className="container my-5 checkOutSection">
            <div className="row g-5">
                <div className="col-md-7">
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <h4 className="mb-4">Customer Information</h4>

                        <div className="row g-3">
                            <div className="col-md-6">
                                <input type="text" className="form-control" id="firstName" name="firstName"
                                    value={form.firstName} onChange={handleChange} placeholder="First name *" required />
                            </div>
                            <div className="col-md-6">
                                <input type="text" className="form-control" id="lastName" name="lastName"
                                    value={form.lastName} onChange={handleChange} placeholder="Last name *" required />
                            </div>
                        </div>

                        <input type="email" className="form-control mb-3" id="email" name="email"
                            value={form.email} onChange={handleChange} placeholder="Email Address (Optional)" />

                        {/* <input type="text" className="form-control my-3" id="companyName" name="companyName"
                            value={form.companyName} onChange={handleChange} placeholder="Company name (Optional)" /> */}

                        <select className="form-select mb-3" id="country" name="country"
                            value={form.country} onChange={handleChange} required>
                            <option value="PK">Pakistan</option>
                        </select>

                        <input type="text" className="form-control mb-3" id="address" name="address"
                            value={form.address} onChange={handleChange} placeholder="House number and street name *" required />

                        <input type="text" className="form-control mb-3" id="apartment" name="apartment"
                            value={form.apartment} onChange={handleChange} placeholder="Apartment, suite, unit, etc. (optional)" />

                        <div className="row g-3">
                            <div className="col-md-6">
                                <input type="text" className="form-control" id="city" name="city"
                                    value={form.city} onChange={handleChange} placeholder="Town / City *" required />
                            </div>
                            <div className="col-md-3">
                                <select className="form-select" id="state" name="state" value={form.state} onChange={handleChange} required>
                                    <option value="Azad Jammu and Kashmir">Azad Jammu and Kashmir</option>
                                    <option value="Balochistan">Balochistan</option>
                                    <option value="Gilgit-Baltistan">Gilgit-Baltistan</option>
                                    <option value="Islamabad Capital Territory">Islamabad Capital Territory</option>
                                    <option value="Khyber Pakhtunkhwa">Khyber Pakhtunkhwa</option>
                                    <option value="Punjab">Punjab</option>
                                    <option value="Sindh">Sindh</option>
                                </select>
                            </div>
                            <div className="col-md-3">
                                <input type="text" className="form-control" id="zip" name="zip"
                                    value={form.zip} onChange={handleChange} placeholder="Postcode / ZIP *" required />
                            </div>
                        </div>
                        <input type="text" className="form-control my-3" id="phone" name="phone"
                            value={form.phone} onChange={handleChange} placeholder="Phone *" required />

                        <textarea className="form-control my-3" id="notes" name="notes"
                            value={form.notes} onChange={handleChange} placeholder="Additional information"></textarea>

                        <h4 className="mb-3">Payment</h4>
                        <div className="my-3">
                            {/* <div className="form-check">
                                <input id="bank" name="paymentMethod" type="radio" className="form-check-input" checked={form.paymentMethod === 'bank'}
                                    onChange={() => setForm({ ...form, paymentMethod: 'bank' })} required />
                                <label className="form-check-label" htmlFor="bank">Direct bank transfer</label>
                            </div> */}
                            <div className="form-check">
                                <input id="cash" name="paymentMethod" type="radio" className="form-check-input" checked={form.paymentMethod === 'cash on delivery'}
                                    onChange={() => setForm({ ...form, paymentMethod: 'cash on delivery' })} required />
                                <label className="form-check-label" htmlFor="cash">Cash on delivery</label>
                            </div>
                        </div>
                        {/* <span id='form_message'>{result}</span> */}
                        <button type="submit" id='order_message' className="btn btn-primary btn-lg w-100">{result}</button>
                    </form>
                </div>
                <div className="col-md-5">
                    <div className="checkout_summary">
                        <h4 className="mb-3">Your order</h4>
                        <ul className="list-group mb-3">
                            {cartItems.map(item => (
                                <li key={item.id} className="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                        <h6 className="my-0">{item.title}</h6>
                                        <p className="text-muted card-desc paragraphStyle">{item.desc}</p>
                                    </div>
                                    <span className="text-muted mx-3 text-nowrap">× {formatPrice(item.quantity)}</span>
                                    <span className="text-muted">Rs. {formatPrice(item.price)}</span>
                                </li>
                            ))}
                            <li className="list-group-item d-flex justify-content-between">
                                <span>Total Items</span>
                                <span>{totalItemsCount}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                                <span>Total (PKR)</span>
                                <strong>{formatPrice(totalPrice)}</strong>
                            </li>
                        </ul>
                        {/* <input type="text" className="form-control" id="coupon" name="coupon" value={form.coupon} onChange={handleChange} placeholder="Enter coupon code" /> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CheckOut;
