import Link from "next/link";
import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';
import Script from "next/script";

const Nav = () => {
    return (
        <>
            <nav className={utilStyles.navbar}>
                <Image
                    priority
                    src="/images/spacelogo.png"
                    className={utilStyles.navLogo}
                    height={40}
                    width={40}
                    alt="Logo of the website. Contains a black and white illustration of a space station inside a crest."
                />
                
                    <Link href='/' className={utilStyles.navItem}>Home</Link>
                    <Link href='/archive' className={utilStyles.navItem}>Archive</Link>
                    <Link href='/about' className={utilStyles.navItem}>About</Link>
                
                
            </nav>
        </>    
        
    );
};

export default Nav;