import { Link } from 'react-router-dom';

function LoggedUser() {

    return (
        <header>
            <Link className="title" href="/home">METFLIX</Link>

            <nav className="navbar">
                <ul>
                    <li className="nav-item">
                        <Link className="nav-link" href="/profile">Welcome, ###</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="/logout">Logout</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default LoggedUser;