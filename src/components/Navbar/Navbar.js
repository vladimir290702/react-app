import './Navbar.css';
import GuestUser from './GuestUser';
import LoggedUser from './LoggedUser';

function Navbar() {
    if (1 == 1) {
        return <LoggedUser />
    }

    return <GuestUser />
}

export default Navbar;