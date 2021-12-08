import './Register.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/authContext';
import { toast } from 'react-toastify';

export default function Register() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    const { register } = useAuth();

    const onRegisterHandler = (e) => {
        e.preventDefault();

        if (password !== repeatPassword) {
            toast.error(`Passwords don't match`, {
                className: 'notification',
            });
            return navigate('/register');
        }

        register(email, password)
            .then(res => {
                toast.success('Successfully created an account', {
                    className: 'notification',
                });
                navigate('/')
            })
            .catch(err => {
                toast.error(err.message, {
                    className: 'notification',
                });
                navigate('/register');
            })
    }

    return (
        <div className="register-wrapper">
            <form className="register" onSubmit={onRegisterHandler} >
                <h1 className="register-title">Sign In</h1>
                <div className="register-group">
                    <input
                        className="register-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        name='email'
                        required="{true}" />
                    <label className="register-label">Email</label>
                </div>
                <div className="register-group">
                    <input
                        className="register-input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        name='password'
                        required="{true}" />
                    <label className="register-label">Password</label>
                </div>
                <div className="register-group">
                    <input
                        className="register-input"
                        value={repeatPassword}
                        onChange={(e) => setRepeatPassword(e.target.value)}
                        type="password"
                        name='re-password'
                        required="{true}" />
                    <label className="register-label">Repeat Password</label>
                </div>
                <button className="register-btn" type="submit" >Sign Up</button>
            </form>
        </div>
    );
}
