'use client';

import AboutPage from '@/containers/About';
import Head from 'next/head';

export default function About() {
    return (
        <>
            <Head>
                <title>About FinGameon | Free Online Games – Play Now</title>
                
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4575195873243785"
                    crossorigin="anonymous"></script>
                <meta
                    name="description"
                    content="FinGameon features the latest and best free online games. Play instantly without downloads, login, popups or distractions. Enjoy fun games alone or with friends on desktop and mobile."
                />

                <meta
                    name="keywords"
                    content="FinGameon, free online games, play games online, browser games, instant games, no download games, mobile games"
                />

                {/* Open Graph */}
                <meta property="og:title" content="About FinGameon – Free Online Games" />
                <meta
                    property="og:description"
                    content="Play the best free online games instantly on FinGameon. No downloads, no popups, just fun."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.fingameon.com/about" />
                <meta property="og:image" content="/og-image.png" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="About FinGameon – Free Online Games" />
                <meta
                    name="twitter:description"
                    content="Discover FinGameon, the ultimate platform for free online browser games."
                />
                <meta name="twitter:image" content="/og-image.png" />
            </Head>
            <AboutPage />

        </>
    );
}
