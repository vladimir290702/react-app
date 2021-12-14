import { useAuth } from "./contexts/authContext";
import { Navigate, Outlet } from "react-router-dom";

const GuardedRoute = () => {
    const { currentUser } = useAuth();
    console.log(currentUser);
    return currentUser ? <Outlet /> : <Navigate to="/login" />;
}

export default GuardedRoute;
