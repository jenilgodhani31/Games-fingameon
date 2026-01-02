import Head from "next/head";
import Script from "next/script";
import path from "path";
import fs from "fs";
import Disclaimer from "@/containers/Disclaimer";

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "public/gameData.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(jsonData);

  return { props: { data } };
}

export default function disclaimerPage({ data }) {
  return (
    <>
      <Head>
        <title>FinGameon – Play Free Online Games</title>
        <meta name="description" content="Play 100+ free browser games on FinGameon. No login, no install!" />
      </Head>

      {/* Use Next Script instead of <script> */}
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4575195873243785"
        crossOrigin="anonymous"
        strategy="lazyOnload"
      />

      <Disclaimer data={data} />
    </>
  );
}
