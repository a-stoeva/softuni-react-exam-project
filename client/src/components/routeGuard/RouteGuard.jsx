import { Navigate } from "react-router";
import { useUser } from "../../contexts/UserContextFile";

export default function RouteGuard({ children }) {
    const { user } = useUser();

    if (!user) {
        return <Navigate to="/login" replace/>;
    }

    return children;
}