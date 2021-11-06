
function LoggedUser() {
    return (
        <header>
            <a className="title" href="#home">METFLIX</a>

            <nav class="navbar">
                <ul>
                    <li class="nav-item">
                        <a class="nav-link" href="#login">Wellcome, $$$$$$</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#register">Logout</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default LoggedUser;