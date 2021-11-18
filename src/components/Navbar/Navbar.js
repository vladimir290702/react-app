import './Navbar.css';
import GuestUser from './GuestUser';
import LoggedUser from './LoggedUser';
import { useState, useEffect } from 'react';

function Navbar() {
    const [logged, toggleLogged] = useState(false);


    useEffect(() => {
        function checkUserData() {
            const item = localStorage.getItem('auth')

            if (item) {
                toggleLogged(localStorage.getItem('auth') || false)
            }
        }

        window.addEventListener('storage', checkUserData)

        return () => {
            window.removeEventListener('storage', checkUserData)
        }
    }, []);


    return logged ? <LoggedUser /> : <GuestUser />;
}

export default Navbar;