import { signOut } from "@firebase/auth";
import { auth } from "../../firebase-config";

function LoggedUser() {
    const logout = async () => {
        await signOut(auth);
        return localStorage.removeItem('auth');
    }
    let user = JSON.parse(localStorage.getItem('auth')).email;
    return (
        <header>
            <a className="title" href="#home">METFLIX</a>

            <nav className="navbar">
                <ul>
                    <li className="nav-item">
                        <a className="nav-link" href="#login">Wellcome, {user}</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={logout} href="#register">Logout</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default LoggedUser;