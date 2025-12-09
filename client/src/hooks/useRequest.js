import { useUser } from "../contexts/UserContextFile";
import { useCallback } from "react";

export default function useRequest() {
    const { token } = useUser();

    const request = useCallback(async (url, method = "GET", data) => {
        const options = { method };
        options.headers = { "Content-Type": "application/json" };
        if (token) options.headers["X-Authorization"] = token;
        if (data) options.body = JSON.stringify(data);

        const response = await fetch(url, options);
        if (!response.ok) {
            const err = await response.json();
            throw new Error(err.message);
        }

        return await response.json();
    }, [token]);

    return request;
}
