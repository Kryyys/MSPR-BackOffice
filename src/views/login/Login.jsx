import "./login.scss";
import React, { useState } from 'react';
import Logo from '../../assets/logo.png';
import axios from 'axios';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:1212/auth/back', { email, password });
            const { token } = response.data;
            localStorage.setItem('token', token);
            window.location.href = '/';
        } catch (error) {
            setError(error.response.data.message);
        }
    };

    return (
        <div className="login-page">
            <div>
                <img src={Logo} alt="Logo" className="logo" />
            </div>
            <h1>Panneau d'administration</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Mot de passe</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Se connecter</button>
                {error && <div className="error">{error}</div>}
            </form>
        </div>
    );
}

export default Login;
