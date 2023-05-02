import Link from "next/link";
import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';

const Nav = () => {
    return (
        <>
            <nav className={utilStyles.navbar}>
                <Image
                    priority
                    src="/images/logo.png"
                    className={utilStyles.navLogo}
                    height={50}
                    width={50}
                    alt="Logo of the website. A sphere with pink and green gradient."
                />
                
                    <Link href='/' className={utilStyles.navItem}>Home</Link>
                    <Link href='/archive' className={utilStyles.navItem}>Archive</Link>
                    <Link href='/about' className={utilStyles.navItem}>About</Link>
                
                
            </nav>
        </>    
        
    );
};

export default Nav;