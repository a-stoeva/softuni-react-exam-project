import { useEffect, useState } from "react";
import { useParams } from "react-router";

import styles from "./Details.module.css"

export default function Details() {

    const {postId} = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        fetch(`http://localhost:3030/jsonstore/weddingHelper/weddingHelper/${postId}`)
            .then(res => res.json())
            .then(data => setPost(data))
            .catch(err => console.error(err));
        console.log(post);
        
    }, [postId])

    return (
            <div className={styles.detailsWrapper}>
                <img className={styles.image} src={post.image} alt="Peony Flower Candle" />

                <div className={styles.info}>
                    <h2 className={styles.title}>{post.title}</h2>
                    <p className={styles.text}>Category: <span>{post.category}</span></p>
                    <p className={styles.text}>Description: <span>{post.description}</span></p>
                    <p className={styles.text}>Price: <span>{post.price}€</span></p>
                    <p className={styles.text}>Contact: <span>{post.contact}</span></p>
                    <p className={styles.text}>Location: <span>{post.location}</span></p>
                    <p className={styles.text}>Availability: <span>{post.availability}</span></p>
                </div>
            </div>
    )
}