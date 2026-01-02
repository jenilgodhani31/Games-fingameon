import GamesDetails from "@/containers/GamesDetails";
import Head from "next/head";
import { Fragment } from "react";
import { useRouter } from "next/router";

export default function GamesDetailsPage() {
  const router = useRouter();
  const { slug } = router.query;

  // slug ne readable name ma convert
  const gameName = slug
    ? slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
    : "Game";

  return (
    <Fragment>
      <Head>
        <title>{gameName} Game Review, Rating & Download | FinGameon</title>

        <meta
          name="description"
          content={`Read complete ${gameName} game review on FinGameon. Check ratings, screenshots, how to play guide, and download links.`}
        />

        <meta
          name="keywords"
          content={`${gameName}, ${gameName} game, ${gameName} review, ${gameName} rating, android games, online games`}
        />

        {/* Open Graph */}
        <meta property="og:title" content={`${gameName} | FinGameon`} />
        <meta
          property="og:description"
          content={`Explore ${gameName} with full details, ratings, screenshots, and gameplay tips on FinGameon.`}
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`https://www.fingameon.com/games/${slug}`}
        />
        <meta property="og:image" content="/og-image.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${gameName} | FinGameon`} />
        <meta
          name="twitter:description"
          content={`Check ${gameName} game review, rating, and how to play on FinGameon.`}
        />
        <meta name="twitter:image" content="/og-image.png" />
      </Head>

      <GamesDetails />
    </Fragment>
  );
}
