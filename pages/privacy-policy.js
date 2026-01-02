'use client';

import PrivacyPolicyPage from '@/containers/PrivacyPolicy';
import Head from 'next/head';
import Script from 'next/script';

export default function PrivacyPolicy() {
    return (
        <>
            <Head>
                <title>Privacy Policy & Terms of Use | FinGameon</title>


                <meta
                    name="description"
                    content="Privacy Policy and Terms of Use for FinGameon.com. Learn how we handle user data, privacy, and website usage."
                />

                <meta
                    name="keywords"
                    content="FinGameon, privacy policy, terms of use, data protection, user privacy, online games"
                />

                {/* Open Graph */}
                <meta property="og:title" content="Privacy Policy & Terms of Use | FinGameon" />
                <meta
                    property="og:description"
                    content="Read FinGameon.com Privacy Policy and Terms of Use. Learn about data collection, privacy, and website usage."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.fingameon.com/privacy-policy" />
                <meta property="og:image" content="/og-image.png" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Privacy Policy & Terms of Use | FinGameon" />
                <meta
                    name="twitter:description"
                    content="FinGameon Privacy Policy and Terms of Use. Learn about how we handle user data and privacy."
                />
                <meta name="twitter:image" content="/og-image.png" />
            </Head>
            <Script
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4575195873243785"
                strategy="lazyOnload"
                crossOrigin="anonymous"
            />

            <PrivacyPolicyPage />
        </>
    );
}
