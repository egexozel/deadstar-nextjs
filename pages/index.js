import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

import Date from '../components/date';
import { Tooltip } from '@nextui-org/react';
import { Link } from "@nextui-org/react";

export async function getStaticProps() {
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
      <section className={utilStyles.justifyContent}>
      <section>
        <h2 className={utilStyles.headingLg}>Ege's Internet Links</h2>
          <ul className={utilStyles.list}>
            <Tooltip content="https://mstdn.party/@ege" color="invert" placement="right" hideArrow><li className={utilStyles.listItem}><Link color="secondary" href='https://mstdn.party/@ege' isExternal>Mastodon</Link></li></Tooltip>
            <Tooltip content="https://twitter.com/egeozel" color="invert" placement='right' hideArrow><li className={utilStyles.listItem}><Link color="secondary" isExternal target="_blank" href="https://twitter.com/egeozel">Twitter</Link></li></Tooltip>
            <Tooltip content="https://instagram.com/egeozel" color="invert" placement='right' hideArrow><li className={utilStyles.listItem}><Link color="secondary" isExternal target="_blank" href="https://instagram.com/egeozel">Instagram</Link></li></Tooltip>
            <Tooltip content="https://open.spotify.com/user/12133325309?si=2ddbd5de0735474d" color="invert" placement='right' hideArrow><li className={utilStyles.listItem}><Link color="secondary" isExternal target="_blank" href="https://open.spotify.com/user/12133325309?si=38d2b49b3e164704">Spotify</Link></li></Tooltip>
            <Tooltip content="https://letterboxd.com/egeozel" color="invert" placement='right' hideArrow><li className={utilStyles.listItem}><Link color="secondary" isExternal target="_blank" href="https://letterboxd.com/egeozel">Letterboxd</Link></li></Tooltip>
            <Tooltip content="https://www.last.fm/user/Egeozel" color="invert" placement='right' hideArrow><li className={utilStyles.listItem}><Link color="secondary" isExternal target="_blank" href="https://www.last.fm/user/Egeozel">Last.fm</Link></li></Tooltip>
            <Tooltip content="https://myanimelist.net/animelist/egell0" color="invert" placement='right' hideArrow><li className={utilStyles.listItem}><Link color="secondary" isExternal target="_blank" href="https://myanimelist.net/animelist/egell0">MyAnimeList</Link></li></Tooltip>
          </ul>
      </section>
      <section className={utilStyles.padding1px}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link color="secondary" href={`/posts/${id}`}>{title}</Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>
      </section>
      
    </Layout>
  );
}