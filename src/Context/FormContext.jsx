import React, { createContext, useEffect, useState } from 'react';

export const FormContext = createContext();

export const FormProvider = (props) => {


    const [result, setResult] = React.useState("");
    const [showPopup, setShowPopup] = useState(false);
    // const formKey = import.meta.env.VITE_FORM_KEY;
    const formKey = "36eec34c-0474-4f97-bd44-9eed6448b274";

    const onSubmit = async (event) => {
        const formMessage = document.getElementById("form_message");
        formMessage.style.color = "#1a1a1a";
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
        formData.append("access_key", formKey);
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });
        const data = await response.json();
        if (data.success) {
            setResult("Your Message has been Sent Successfully");
            formMessage.style.color = "green";
            setShowPopup(true);
            event.target.reset();
            setTimeout(() => {
                setShowPopup(false);
            }, 10000); // Hide popup after 5 seconds
        } else {
            console.log("Error", data);
            setResult(data.message);
            formMessage.style.color = "red";
        }
    };

    useEffect(() => {
        const handleClickOutside = () => setShowPopup(false);
        if (showPopup) {
            document.addEventListener('click', handleClickOutside);
            return () => document.removeEventListener('click', handleClickOutside);
        }
    }, [showPopup]);





    // Format cart items into a readable string
    const formatCartItems = (items) => {
        return items.map(item => `
      Product: ${item.title}<br>
      Description: ${item.desc}<br>
      Quantity: ${item.quantity}<br>
      Price: Rs. ${item.price}
    `).join('<br><br>');
    };

    // Handle form submission with async/await
    const handleSubmit = async (e, form) => {
        e.preventDefault();

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
            const response = await emailjs.send('service_anuuuvq', 'template_xxwqqoi', templateParams, '2lKqSLcLTPyA1zKIN');
            console.log('SUCCESS!', response.status, response.text);
            // Optionally, show a success message or redirect the user
        } catch (error) {
            console.error('FAILED...', error);
            // Optionally, show an error message
        }
    };



    return (
        <FormContext.Provider value={{
            result,
            onSubmit,
            showPopup,
            handleSubmit,


        }}>
            {props.children}
        </FormContext.Provider>
    )
}

// export default FormContext
