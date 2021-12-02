import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/authContext';

function Navbar() {
    const navigate = useNavigate();

    const { currentUser, logout } = useAuth();
    let email

    if (currentUser) {
        email = currentUser.email;
    }

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
                <Link className="nav-link" to="/profile">Welcome, {email}</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/logout" onClick={async e => {
                    e.preventDefault();
                    navigate('/')

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

export default Navbar;

/*

<header class="header">
        <nav class="navbar">
            <a href="#" class="nav-logo">WebDev.</a>
            <ul class="nav-menu">
                <li class="nav-item">
                    <a href="#" class="nav-link">Services</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">Blog</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">About</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">Contact</a>
                </li>
            </ul>
            <div class="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </nav>
</header>

*/