import { Link } from "react-router";
import styles from './Header.module.css'

    export default function Header() {
        return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <Link to='/' className={styles.logoLink}>
                    <img src='/logo.png' className={styles.logo} alt="Wedding Helper Logo" />
                </Link>

                <div className={styles.div}>
                <Link to='/catalog'>Catalog</Link>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
                <Link to='/'>Logout</Link>
                </div>
            </nav>
        </header>
        )
    }