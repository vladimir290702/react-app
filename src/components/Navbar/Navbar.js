import './Navbar.css';
import GuestUser from './GuestUser';
import LoggedUser from './LoggedUser';

function Navbar() {
   
    if (true) {
        return <LoggedUser />
    }

    return <GuestUser />
}

export default Navbar;