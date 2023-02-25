import Link from "next/link";
import utilStyles from '../styles/utils.module.css';

const Nav = () => {
    return (
        <nav className={utilStyles.navbar}>
            <Link href='/' className={utilStyles.navItem}>Home</Link>
            <Link href='/archive' className={utilStyles.navItem}>Archive</Link>
            <Link href='/works' className={utilStyles.navItem}>Works</Link>
            <Link href='/about' className={utilStyles.navItem}>About</Link>
        </nav>
    );
};

export default Nav;