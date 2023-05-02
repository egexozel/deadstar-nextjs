import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { Spotify } from "../components/spotify/spotify.tsx";

export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section>
                <p>Hi, I'm Ege! I'm a photographer, musician (mostly electronic and synth stuff), & a curious internet consumer who is interested in making websites. I've made this blog as a means to escape from TheSocialMedia™ (it's funny, i know) as I felt those platforms are not flexibile enough for people to share and do what they truly want. I'm intending to use this blog as a means to share what I like, find interesting online and other casual stuff. If you found your way to this site, welcome! I can't promise I will be updating this frequently, however you are free to browse. If you have any questions or want to contact me you can send me an email at egexozel@gmail.com. Have a nice day!</p>
            </section>
            <br></br>
            <h1 className={utilStyles.headingLg}>Currently Obsessed with</h1>
            <section className={utilStyles.justifyContent}>
                <Spotify className={utilStyles.spotifyItem} link="https://open.spotify.com/track/0JUWF44gfMszGNhjCF7Ufs?si=12bbf13e21724ed1" />
                <Spotify className={utilStyles.spotifyItem} link="https://open.spotify.com/playlist/03kDhGvH5hHHZW4AlwD0aX?si=639ccda2bcff4d30" />
            </section>
        </Layout>
    );
}