import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export async function getServerSideProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}


export default function Home({ allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi, I'm Ege. Welcome to my veeeery simple blog!</p>
        <p>I hope you enjoy your time here!</p>
      </section>
      <section>
        <h2 className={utilStyles.headingLg}>Ege's Internet Links</h2>
          <ul className={utilStyles.list}>
                <li><a target="_blank" rel="me" href="https://mstdn.party/@ege">Mastodon</a></li>
                <li><a target="_blank" href="https://twitter.com/egeozel">Twitter</a></li>
                <li><a target="_blank" href="https://instagram.com/egeozel">Instagram</a></li>
                <li><a target="_blank" href="https://open.spotify.com/user/12133325309?si=38d2b49b3e164704">Spotify</a>
                </li>
                <li><a target="_blank" href="https://letterboxd.com/egeozel">Letterboxd</a></li>
                <li><a target="_blank" href="https://www.last.fm/user/Egeozel">Last.fm</a></li>
                <li><a target="_blank" href="https://myanimelist.net/animelist/egell0">MyAnimeList</a></li>
          </ul>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}