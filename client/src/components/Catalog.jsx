import {useState, useEffect} from 'react';
import ItemCard from "./ItemCard";

export default function Catalog() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/weddingHelper')
            .then(res => res.json())
            .then(data => setItems(data.weddingHelper))
            .catch(err => console.error(err));
    }, [])

    return (
        <section>
            <h2>Catalog Page</h2>

            {items.length === 0 && <h3>No added posts yet!</h3>}

            <div>
                {items.map(item => (
                    <ItemCard key={item.id} item={item} />
                ))}
            </div>
 
        </section>
    )
}