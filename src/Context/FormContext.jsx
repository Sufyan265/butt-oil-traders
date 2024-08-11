import React, { createContext, useEffect, useState } from 'react';

export const FormContext = createContext();

export const FormProvider = (props) => {


    const [result, setResult] = React.useState("Send Message");
    const [showPopup, setShowPopup] = useState(false);
    // const formKey = import.meta.env.VITE_FORM_KEY;
    const formKey = "36eec34c-0474-4f97-bd44-9eed6448b274";

    const onSubmit = async (event) => {
        event.preventDefault();
        const formMessage = document.getElementById("form_message");
        formMessage.style.color = "white";
        setResult("Please Wait....");
        formMessage.classList.remove('disabled');

        const formData = new FormData(event.target);
        formData.append("access_key", formKey);
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });
        const data = await response.json();
        if (data.success) {
            formMessage.style.backgroundColor = "green";
            setResult("Your Message has been Sent Successfully!");
            formMessage.classList.add('disabled');
            setShowPopup(true);
            event.target.reset();
            setTimeout(() => {
                setShowPopup(false);
                formMessage.classList.remove('disabled');
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


    return (
        <FormContext.Provider value={{
            result,
            onSubmit,
            showPopup,

        }}>
            {props.children}
        </FormContext.Provider>
    )
}

// export default FormContext
