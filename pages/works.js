import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { Grid } from "@nextui-org/react";


export default function works() {
    return (
        
        <Layout>
            <Head>
                <title>{siteTitle} | Works</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <h2 className={utilStyles.headingXl}>Works</h2>
                <Grid.Container gap={2} justify="center">
                
                </Grid.Container>
            </section>
        </Layout>
    );
}