import Head from 'next/head';
import Home from '../screens/Home';
import Contact from '../screens/Contact';

const Index = () => (
    <>
        <Head>
            <title>Methora Theme</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Home />
        <Contact />
    </>
);

export default Index;
