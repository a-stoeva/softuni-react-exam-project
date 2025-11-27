import { Link } from "react-router";
import styles from './Home.module.css'

export default function Home() {
    return (
        <div className={styles.home}>
            <h1 className={styles.title}>Wedding Helper</h1>
            <div className={styles.text}>
                <p>A shared space where couples exchange meaningful ideas, inspiration, experiences, and trusted recommendations!</p>
                <p>Browse our <Link className={styles.catalog} to='/catalog'>Catalog</Link> to spark your creativity.</p>
            </div>
        </div>
    )
}