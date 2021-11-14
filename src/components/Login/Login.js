import './Login.css';
import { useState } from 'react';
import {signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../../firebase-config';

function Login() {
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassoword, setLoginPassword] = useState('');

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth, loginEmail, loginPassoword
            );
            return localStorage.setItem('auth', JSON.stringify(user.user));
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div className="login-wrapper">
            <div className="login">
                <h1 className="login-title">Sign In</h1>
                <div className="login-group">
                    <input className="login-input" onChange={(event) => { setLoginEmail(event.target.value) }} type="text" required="{true}" />
                    <label className="login-label">Email</label>
                </div>
                <div className="login-group">
                    <input className="login-input" onChange={(event) => { setLoginPassword(event.target.value) }} type="password" required="{true}" />
                    <label className="login-label">Password</label>
                </div>
                <button className="login-btn" onClick={login} type="button">Sign In</button>
            </div>
        </div>
    );
}

export default Login;