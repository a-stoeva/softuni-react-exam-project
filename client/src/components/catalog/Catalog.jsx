import {useState, useEffect} from 'react';
import ItemCard from "../item/ItemCard";

import styles from "./Catalog.module.css";

export default function Catalog() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/weddingHelper')
            .then(res => res.json())
            .then(data => setItems(Object.values(data.weddingHelper)))
            .catch(err => console.error(err));
    }, [])

    return (
        <section className={styles.catalogSection}>
            <h2 className={styles.title}>Catalog Page</h2>

            {items.length === 0 && <h3 className={styles.noItems}>No added posts yet!</h3>}

            <div className={styles.catalog}>
                {items.map(item => (
                    <ItemCard key={item._id} item={item} />
                ))}
            </div>
 
        </section>
    )
}