import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* 🔹 Basic SEO */}
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="FinGameon is your ultimate destination to discover, explore, and play the best mobile and online games. Get detailed reviews, ratings, screenshots, and gameplay guides."
        />
        <meta
          name="keywords"
          content="FinGameon, online games, mobile games, android games, ios games, free games, game reviews, game ratings, play games online"
        />
        <meta name="author" content="FinGameon" />
        <meta name="robots" content="index, follow" />

        {/* 🔹 Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* 🔹 Open Graph */}
        <meta property="og:site_name" content="FinGameon" />
        <meta property="og:title" content="FinGameon – Discover & Play Amazing Games" />
        <meta
          property="og:description"
          content="Explore top-rated mobile and online games on FinGameon. Read reviews, ratings, and start playing instantly."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.fingameon.com" />
        <meta property="og:image" content="/og-image.png" />

        {/* 🔹 Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FinGameon – Discover & Play Amazing Games" />
        <meta
          name="twitter:description"
          content="Find the best games with reviews, ratings, and screenshots only on FinGameon."
        />
        <meta name="twitter:image" content="/og-image.png" />

        {/* 🔹 Theme Color */}
        <meta name="theme-color" content="#2563eb" />

        {/* 🔹 Favicon */}
        <link rel="icon" href="/assets/images/logo/img.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* 🔹 Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4575195873243785"
          crossOrigin="anonymous"
        ></script>

        {/* 🔹 Google Tag Manager (HEAD) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TFN2TW78');
            `,
          }}
        />

        {/* 🔹 Microsoft Clarity */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
      (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "urjpz0f36m");
    `,
          }}
        />
      </Head>

      <body className="antialiased">
        {/* 🔹 Google Tag Manager (BODY - noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TFN2TW78"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
