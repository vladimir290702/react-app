import './Register.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase-config';
import { useState } from 'react';

function Register() {
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
  
    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth, registerEmail, registerPassword
            );

            return localStorage.setItem('auth', JSON.stringify(user.user));
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div className="register-wrapper">
            <div className="register">
                <h1 className="register-title">Sign In</h1>
                <div className="register-group">
                    <input className="register-input" onChange={(event) => { setRegisterEmail(event.target.value) }} type="text" required="{true}" />
                    <label className="register-label">Email</label>
                </div>
                <div className="register-group">
                    <input className="register-input" onChange={(event) => { setRegisterPassword(event.target.value) }} type="password" required="{true}" />
                    <label className="register-label">Password</label>
                </div>
                <div className="register-group">
                    <input className="register-input" type="password" />
                    <label className="register-label">Repeat Password</label>
                </div>
                <button className="register-btn" type="button" onClick={register}>Sign In</button>
            </div>
        </div>

    );
}

export default Register;