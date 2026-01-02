import path from "path";
import fs from "fs";
import Home from "@/containers/Home";
import Script from "next/script";
import Head from "next/head";

// 🔥 Force static rendering (fastest)
export const dynamic = "force-static";

// 🔥 Load game data at build time
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "public/gameData.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(jsonData);

  return {
    props: { data },
  };
}

export default function HomePage({ data }) {
  return (
    <>
      {/* ======================
          🔍 SEO + META TAGS
      ====================== */}
      <Head>
        {/* Basic SEO */}
        <title>Play Free Online Games | Fingameon – Best Browser Games</title>
        <meta
          name="description"
          content="Play the best free online games on Fingameon. Enjoy action, racing, arcade, multiplayer and browser games instantly without download."
        />
        <meta
          name="keywords"
          content="free online games, browser games, play games online, action games, racing games, multiplayer games, arcade games, fingameon games"
        />
        <meta name="author" content="FinGameon" />
        <meta name="robots" content="index, follow" />

        {/* Mobile */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Canonical */}
        <link rel="canonical" href="https://games.fingameon.com/" />

        {/* Open Graph (Facebook / WhatsApp) */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="FinGameon" />
        <meta property="og:title" content="Play Free Online Games | Fingameon" />
        <meta
          property="og:description"
          content="Play free online games instantly on Fingameon. No download required. Enjoy top browser games now."
        />
        <meta property="og:url" content="https://games.fingameon.com/" />
        <meta property="og:image"  />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Play Free Online Games | Fingameon" />
        <meta
          name="twitter:description"
          content="Play free online games instantly on Fingameon. Action, racing, arcade & multiplayer games."
        />
        <meta
          name="twitter:image"

        />

        {/* Google AdSense verification */}
        <meta
          name="google-adsense-account"
          content="ca-pub-4575195873243785"
        />
      </Head>

      {/* ======================
          🔥 ADS SCRIPT (NON-BLOCKING)
      ====================== */}
      <Script
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4575195873243785"
        strategy="lazyOnload"
        crossOrigin="anonymous"
      />

      {/* ======================
          MAIN UI
      ====================== */}
      <Home data={data} />
    </>
  );
}
