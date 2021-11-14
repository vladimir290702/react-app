function GuestUser() {
    return (
        <header>
            <a className="title" href="#home">METFLIX</a>

            <nav className="navbar">
                <ul>
                    <li className="nav-item">
                        <a className="nav-link" href="/login">Login</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/register">Register</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default GuestUser;