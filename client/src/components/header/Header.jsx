import { Link } from "react-router";
import styles from './Header.module.css';
import { useUser } from "../../contexts/UserContextFile";

    export default function Header() {

        const {user, logout, token} = useUser();

        const logoutHandler = async () => {
            try {

                await fetch("http://localhost:3030/users/logout",{
                    method: "GET",
                    headers: {
                        "X-Authorization": token
                    }
                });   
                        
                logout();

            } catch (err) {
                alert(err.message);
            }
        };

        return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <Link to='/' className={styles.logoLink}>
                    <img src='/logo.png' className={styles.logo} alt="Wedding Helper Logo" />
                </Link>

                <div className={styles.div}>
                <Link to='/'>Home</Link>
                <Link to='/catalog'>Catalog</Link>

                {!user && (
                    <>
                        <Link to='/login'>Login</Link>
                        <Link to='/register'>Register</Link>
                    </>)}

                    {user && (
                        <>
                            <Link to='/create'>Create Post</Link>
                            <button onClick={logoutHandler}>Logout</button>
                        </>
                    )}
                </div>
            </nav>
        </header>
        )
    }