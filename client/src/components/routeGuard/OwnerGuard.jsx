import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useUser } from "../../contexts/UserContextFile";
import useRequest from "../../hooks/useRequest";

export default function OwnerGuard({ children }) {
    const { user } = useUser();
    const { postId } = useParams();
    const navigate = useNavigate();
    const request = useRequest();

    const [isOwner, setIsOwner] = useState(null);

    useEffect(() => {
        if (!user) {
            alert("Not authorized");
            return navigate("/login");
        }

        request(`http://localhost:3030/data/weddingHelper/${postId}`)
            .then(post => {
                if (post._ownerId === user._id) {
                    setIsOwner(true);
                } else {
                    alert("Not authorized");
                    navigate(`/catalog/${postId}/details`);
                }
            })
            .catch(() => {
                alert("Something went wrong!");
                navigate("/catalog");
            });
    }, [postId, user, navigate, request]);

    if (isOwner === null) { 
        return null;
    };

    return children;
}
