function LoggedUser() {

    return (
        <header>
            <a className="title" href="#home">METFLIX</a>

            <nav className="navbar">
                <ul>
                    <li className="nav-item">
                        <a className="nav-link" href="/profile">Welcome, ###</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/logout">Logout</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default LoggedUser;