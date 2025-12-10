import {useState, useEffect} from 'react';
import ItemCard from "../item/ItemCard";

import styles from "./Catalog.module.css";
import useRequest from '../../hooks/useRequest';

export default function Catalog() {

    const [items, setItems] = useState([]);
    const request = useRequest();

    useEffect(() => {
        request('http://localhost:3030/data/weddingHelper')
            .then(data => setItems(data))
            .catch(err => console.error(err));
    }, [request])

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