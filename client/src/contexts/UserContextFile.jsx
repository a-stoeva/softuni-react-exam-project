import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router";

const UserContext = createContext();

export function UserProvider({ children }) {
    const [token, setToken] = useState(null);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const login = (response) => {
        setToken(response.accessToken);
        setUser({
            _id: response._id,
            email: response.email,
            accessToken: response.accessToken,
        });
    };

    const logout = () => {
        setToken(null);
        setUser(null);
        navigate("/");
    };

    return (
        <UserContext.Provider value={{ token, user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useUser() {
    return useContext(UserContext);
}