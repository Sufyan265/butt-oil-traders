import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const UserContext = createContext();

export const UserProvider = (props) => {
    const host = "http://localhost:5000";
    // const host = "https://inotebook-backend-tau.vercel.app";

    const demoUser = {
        "success": false,
        "user": {
            "_id": "----------",
            "name": "-----",
            "email": "-----@example.com",
            "__v": "-"
        }
    }
    // const demoUser2 = {};

    const [userData, setUserData] = useState(demoUser);

    // const handleError = error => {
    //     const errorComponent = document.getElementById("errorComponent")
    //     if (errorComponent) {
    //         errorComponent.style.display = error ? "block" : "none";
    //     }
    // }

    const catchError = (error) => {
        if (error instanceof TypeError) {
            // This is likely a network error (e.g., internet is off) ↓
            console.log("Please check your internet connection and try again.");
        } else {
            // Other types of errors ↓
            console.error('Error during fetching notes:', error.message);
        }
    }



    // _____________________________________________________
    const { showAlert } = props;

    const [paswwordError, setPaswwordError] = useState(false);

    // Sign Up user ↓
    const signup = async (credentials) => {
        // API Call ↓
        try {
            const response = await fetch(`${host}/auth/createuser`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password }),
            });
            const user = await response.json();
            if (credentials.password !== credentials.cPassword || credentials.cPassword !== credentials.password) {
                // setPaswwordError(credentials.password !== credentials.cPassword);
                return setPaswwordError(true);
            }

            if (user.success) {
                // Save the auth token and redirect ↓ 
                localStorage.setItem("token", user.authToken)
                navigate("/")
                // navigate("/login");
                showAlert("success", "Account created successfuly");
            } else {
                // console.log(user)
                if (user.alreadyExist) {
                    showAlert("warning", user.error);
                    return navigate("/login")
                }
                showAlert("danger", user.error);
            }
        } catch (error) {
            // console.log(error)e
            catchError(error)
        }
    }


    // _____________________________________________________

    const adminBtn = document.getElementById("admin_btn")
    const navigate = useNavigate();
    // Login user ↓
    const login = async (credentials) => {
        // API Call ↓
        try {
            const response = await fetch(`${host}/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email: credentials.email, password: credentials.password }),
            });
            const user = await response.json();

            if (user.success) {
                // console.log(user)
                // Save the auth token and redirect ↓ 
                localStorage.setItem("token", user.authToken)
                navigate("/")
                if (adminBtn) {
                    adminBtn.style.display = "inline-block";
                }
                showAlert("success", "Logged in successfully");
            } else {
                // console.log(user)
                showAlert("danger", user.error);
            }

        } catch (error) {
            // console.log(error)
            catchError(error)
        }
    }



    // _____________________________________________



    // Get user data ↓
    const getUser = async () => {
        // API Call ↓
        try {
            const response = await fetch(`${host}/auth/getuser`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem("token")
                },
            });
            const user = await response.json();
            if (user.user && user.success) {
                // console.log(user)
                setUserData(user)
            }
        } catch (error) {
            // console.log(error)
            catchError(error)
        }
    }

    // ____________________________________

    const logout = () => {
        localStorage.removeItem("token");
        if (adminBtn) {
            adminBtn.style.display = "none";
        }
        navigate("/login");
    }

    return (
        <UserContext.Provider value={{
            host,
            catchError,

            login,
            signup,
            getUser,
            userData,

            logout,

            paswwordError,
            setPaswwordError,

        }}>
            {props.children}
        </UserContext.Provider>
    )
}

// export default UserProvider