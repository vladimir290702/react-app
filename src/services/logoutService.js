import { signOut } from "@firebase/auth";
import { auth } from "../firebase-config";


const logout = async () => {
    await signOut(auth);
    return localStorage.removeItem('auth');
}

export default logout;