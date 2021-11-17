import { Link } from 'react-router-dom';

function GuestUser() {
    return (
        <header>
            <Link className="title" to="/home">METFLIX</Link>

            <nav className="navbar">
                <ul>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/register">Register</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default GuestUser;