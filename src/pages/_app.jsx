import '../styles/global.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Confetti Tailwind Next Template</title>
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
