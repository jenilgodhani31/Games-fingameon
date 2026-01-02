'use client';

import TermsPage from '@/containers/Terms';
import Head from 'next/head';
import Script from 'next/script';


export default function Terms() {
    return (
        <>
            <Head>
                <title>Terms & Conditions | FinGameon</title>
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4575195873243785"
                    crossorigin="anonymous"></script>
                <meta
                    name="description"
                    content="Read the Terms and Conditions for FinGameon – Rules and guidelines for using our free online games platform."
                />
                <meta name="keywords" content="FinGameon, online games, free games, terms, conditions, privacy, play online games" />
                <Script
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXX"
                    strategy="lazyOnload"
                    crossOrigin="anonymous"
                />
            </Head>
            <Script
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4575195873243785"
                strategy="lazyOnload"
                crossOrigin="anonymous"
            />

            <TermsPage />

        </>
    );
}
