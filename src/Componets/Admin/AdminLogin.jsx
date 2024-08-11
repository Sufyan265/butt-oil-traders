import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CryptoJS from 'crypto-js';

const AdminLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const adminUsername = import.meta.env.VITE_ADMIN_USERNAME;
    const adminPasswordHash = import.meta.env.VITE_ADMIN_PASSWORD_HASH;

    const hashPassword = (password) => {
        return CryptoJS.SHA256(password).toString();
    };

    const handleLogin = (e) => {
        e.preventDefault();
        const hashedPassword = hashPassword(password);

        if (username === adminUsername && hashedPassword === adminPasswordHash) {
            const encryptedUsername = CryptoJS.AES.encrypt(username, 'secret-key').toString();
            const encryptedPassword = CryptoJS.AES.encrypt(hashedPassword, 'secret-key').toString();

            localStorage.setItem('isAdmin', true);
            localStorage.setItem('adminUsername', encryptedUsername);
            localStorage.setItem('adminPassword', encryptedPassword);

            navigate('/admin');
        } else {
            alert('Invalid credentials')
        }
    };

    return (
        <div className="container d-flex my-5 align-items-center justify-content-center">
            <div className="card p-4" style={{ maxWidth: '400px', width: '100%' }}>
                <h2 className="text-center mb-4">Admin Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input
                            type="text"
                            id="username"
                            className="form-control"
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            autoComplete="username"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="form-control"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            autoComplete="current-password"
                        />
                    </div>
                    <button type="submit" className="btn btn-dark w-100 btnStyle">Login</button>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;
