import React from 'react';
import Head from 'next/head';
import Home from '../screens/Home';
import HeaderBar from '../components/HeaderBar';

const Index = () => (
    <>
        <Head>
            <title>Next Js, Tailwind Css Boilerplate - Confetti Themes</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Home />
        <HeaderBar />
    </>
);

export default Index;
