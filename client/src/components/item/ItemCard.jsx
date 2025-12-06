import {Link} from 'react-router'
import styles from "./ItemCard.module.css"

export default function ItemCard({item}) {
    return (
        <div className={styles.card}>
            <img className={styles.image} src={item.image} alt={item.title} />               
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.text}>Category: <span>{item.category}</span></p>
            <p className={styles.text}>Price: <span>{item.price}€</span></p>
            <p className={styles.text}>Location: <span>{item.location}</span></p>
            <Link to={`/catalog/${item._id}/details`} className={styles.button}>More details</Link>
        </div>
    )
}