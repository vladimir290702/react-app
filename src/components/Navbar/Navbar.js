import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/authContext';
import { toast } from 'react-toastify';

export default function Navbar() {
    const navigate = useNavigate();

    const { currentUser, logout } = useAuth();

    const guestNavigation = (
        <ul className="nav-menu">
            <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/register">Register</Link>
            </li>
        </ul>
    )

    const userNavigation = (
        <ul className="nav-menu">
            <li className="nav-item">
                <Link className="nav-link" to="/profile">Welcome, {currentUser}</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/logout" onClick={async e => {
                    e.preventDefault();
                    navigate('/')
                    toast.success('You successfully logged out!', {
                        className: 'notification',
                    });
                    logout();
                }}>Logout</Link>
            </li>
        </ul>
    )

    return (
        <div className="app-navbar">
            <header className='header'>
                <Link className="title" to="/">MOVIE ADDICT</Link>

                <nav className="navbar">

                    {currentUser ? userNavigation : guestNavigation}
                </nav>
            </header>
        </div>
    );
}