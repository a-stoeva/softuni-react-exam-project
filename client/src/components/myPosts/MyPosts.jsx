import { useEffect, useState } from "react";
import styles from "./MyPosts.module.css";
import ItemCard from "../item/ItemCard";
import useRequest from "../../hooks/useRequest";
import { useUser } from "../../contexts/UserContextFile";

export default function MyPosts() {
    const { user } = useUser();
    const request = useRequest();
    const [myPosts, setMyPosts] = useState([]);

    useEffect(() => {
        if (!user) return;

        request('http://localhost:3030/data/weddingHelper')
            .then(data => {
                setMyPosts(data.filter(post => post._ownerId === user._id));
            })
            .catch(err => console.error(err));
    }, [user, request]);

    return (
        <section className={styles.myPostsSection}>
            <h2 className={styles.title}>My Posts</h2>

            {myPosts.length === 0 && <h3 className={styles.noItems}>You have no posts yet!</h3>}

            <div className={styles.catalog}>
                {myPosts.map(myPosts => (
                    <ItemCard key={myPosts._id} item={myPosts} />
                ))}
            </div>
        </section>
    );
}
