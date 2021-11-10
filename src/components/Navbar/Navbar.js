import './Navbar.css';
import GuestUser from './GuestUser';
import LoggedUser from './LoggedUser';

function Navbar() {
    let user = JSON.parse(localStorage.getItem('auth'))?.email;
    if (user) {
        return <LoggedUser />
    }

    return <GuestUser />
}

export default Navbar;