import Link from "next/link";
import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';

const Nav = () => {
    return (
        <>
            <nav className={utilStyles.navbar}>
                <Link href='/'>
                    <Image
                    priority
                    src="/images/logo.png"
                    className={utilStyles.navLogo}
                    height={45}
                    width={45}
                    alt="Logo of the website. A sphere with pink and green gradient."
                    />
                </Link>    
                
                    <Link href='/' className={utilStyles.navItem}>Home</Link>
                    <Link href='/archive' className={utilStyles.navItem}>Archive</Link>
                    <Link href='/about' className={utilStyles.navItem}>About</Link>
                
                
            </nav>
        </>    
        
    );
};

export default Nav;