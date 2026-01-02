import Image from "next/image";
import path from "path";
import fs from "fs";
import Home from "@/containers/Home";
import Script from "next/script";                 // ⬅ Ads optimize use

// Force static rendering for speed ⚡
export const dynamic = "force-static";

// Load gameData at build time (super fast)
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "public/gameData.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(jsonData);

  return { props: { data } };
}

export default function HomePage({ data }) {
  return (
    <>
      {/* 🚀 Cache & speed meta */}
      <head>
        <meta httpEquiv="Cache-Control" content="public, max-age=31536000" />
        <meta name="google-adsense-account" content="ca-pub-4575195873243785" />
      </head>

      {/* 🔥 Load Home UI */}
      <Home data={data} />



    </>
  );
}
