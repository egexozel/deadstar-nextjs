import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Nav from '../components/nav';

const name = 'Ege Özel';
export const siteTitle = 'Deadstar.one';

export default function Layout({ children, home, Post }) {
  return (
    <>
      <Nav />
      <div className={styles.container}>

        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Deadstar.one, a personal blog written by Ege Özel."
          />
          <meta
            property="og:image"
            content={`https://og-image.vercel.app/${encodeURI(
              siteTitle,
            )}.png?theme=dark&md=0&fontSize=120px`}
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>

        <header className={`${styles.header} ${utilStyles.yellowBg}`}>
          {home ? (
            <>
              <Image
                priority
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={250}
                width={250}
                alt="Profile picture of the author."
              />
              <h1 className={utilStyles.heading2Xl}>{name}</h1>
            </>
          ) : (<></>)
          }
        </header>

        <main>{children}</main>
      </div>
    </>
  );
}