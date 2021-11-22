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
        <ul>
            <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/register">Register</Link>
            </li>
        </ul>
    )

    const userNavigation = (
        <ul>
            <li className="nav-item">
                <Link className="nav-link" to="/profile">Welcome, {email}</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/logout" onClick={async e => {
                    e.preventDefault();
                    navigate('/home')

                    logout();
                }}>Logout</Link>
            </li>
        </ul>
    )

    return (
        <header>
            <Link className="title" to="/home">METFLIX</Link>

            <nav className="navbar">
                {currentUser ? userNavigation : guestNavigation}
            </nav>
        </header>
    );
}

export default Navbar;