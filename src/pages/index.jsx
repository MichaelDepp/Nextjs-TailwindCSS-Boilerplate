import Head from 'next/head';
import Home from '../screens/Home';
import Contact from '../screens/Contact';

const Index = () => (
    <>
        <Head>
            <title>Next Js, Tailwind Css Boilerplate - Confetti Themes</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Home />
        <Contact />
    </>
);

export default Index;
