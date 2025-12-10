import { useState, useEffect } from "react";
import { useUser } from "../../contexts/UserContextFile";
import useRequest from "../../hooks/useRequest";
import styles from "./LikeButton.module.css";

export default function LikeButton({ postId, ownerId }) {
    const { user } = useUser();
    const request = useRequest();
    const [likes, setLikes] = useState(0);
    const [hasLiked, setHasLiked] = useState(false);

    const isAuthor = user && user._id === ownerId;
    const isGuest = !user;

    useEffect(() => {
        const loadLikes = async () => {
            try {
                const query = encodeURIComponent(`postId="${postId}"`);
                const allLikes = await request(`http://localhost:3030/data/likes?where=${query}`);

                setLikes(allLikes.length);
                if (user) {
                    setHasLiked(allLikes.some(like => like._ownerId === user._id));
                }
            } catch (err) {
                console.error(err);
            }
        };
        loadLikes();
    }, [postId, user, request]);

    const likeHandler = async () => {

        if (!user) {
        alert("Please log in to like!");
        return;
    }

        if (hasLiked || isAuthor) return;

        try {
            await request("http://localhost:3030/data/likes", "POST", { postId });
            setLikes(state => state + 1);
            setHasLiked(true);
        } catch (err) {
            console.error(err);
        }
    };

    if (isAuthor || isGuest) return (
        <div className={styles.likeWrapper}>
            <span className={styles.likeCount}>{likes} {likes === 1 ? "like" : "likes"}</span>
        </div>
    );

    return (
        <div className={styles.likeWrapper}>
            <button 
                className={hasLiked || isAuthor ? styles.liked : styles.likeButton} 
                onClick={likeHandler}
                disabled={!user || hasLiked || isAuthor}
            >
                {hasLiked ? "Liked ❤️" : "Like ♡"}
            </button>
            <span className={styles.likeCount}>{likes} {likes === 1 ? "like" : "likes"}</span>
        </div>
    );
}
