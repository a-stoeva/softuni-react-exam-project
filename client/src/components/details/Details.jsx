import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router";
import { useUser } from "../../contexts/UserContextFile";

import styles from "./Details.module.css"
import useRequest from "../../hooks/useRequest";

export default function Details() {

    const {postId} = useParams();
    const [post, setPost] = useState({});
    const navigate = useNavigate();
    const { user } = useUser();
    const request = useRequest();

    useEffect(() => {

        if(!postId) return;
        
        request(`http://localhost:3030/data/weddingHelper/${postId}`)
            .then(data => setPost(data))
            .catch(err => console.error(err));       
    }, [postId, request])

    const deleteClickHandler = async () => {

        try {
            await request(`http://localhost:3030/data/weddingHelper/${postId}`, "DELETE");
        } catch (err) {
            alert(err.message);
        }

        navigate("/catalog");
    }

    const isOwner = user && post._ownerId === user._id;

    return (
            <div className={styles.detailsWrapper}>
                <img className={styles.image} src={post.image} alt={post.title} />

                <div className={styles.info}>
                    <h2 className={styles.title}>{post.title}</h2>
                    <p className={styles.text}>Category: <span>{post.category}</span></p>
                    <p className={styles.text}>Description: <span>{post.description}</span></p>
                    <p className={styles.text}>Price: <span>{post.price}€</span></p>
                    <p className={styles.text}>Contact: <span>{post.contact}</span></p>
                    <p className={styles.text}>Location: <span>{post.location}</span></p>
                    <p className={styles.text}>Availability: <span>{post.availability}</span></p>
                

                {isOwner && 
                <div className={styles.buttons}>
                    <Link to={`/catalog/${postId}/edit`} className={styles.button}>Edit Post</Link>
                    <button className={styles.button} onClick={deleteClickHandler}>Delete Post</button>
                </div>
                }
                </div>

            </div>
    )
}