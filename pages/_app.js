import { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";

import "../styles/reset.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Card.css";
import "../styles/ModalCarousel.css";
import "../styles/index.scss";
import * as gtag from "../lib/gtag";

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
                `}
      </Script>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />

        {/* Linkedin thumbnail */}
        <meta property="og:title" content="JB & B Construction, Inc." />
        <meta property="og:image" content="/images/tio-jorge-screenshot.png" />
        <meta
          property="og:description"
          content="Get a free estimate for kitchen and bathroom remodeling, electrical, interior and exterior painting, plumbing, decks, driveway, roofing, apartment or house renovations, drywall or new construction."
        />
        <meta property="og:url" content="https://www.jbandbconstruction.com" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />

        <meta property="og:type" content='website'/>

        {/* browser favicon */}
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/Logos/favicons/favicon-1.ico"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/Logos/favicons/favicon-1-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/Logos/favicons/favicon-1-16x16.png"
        />
        <title>
          JB & B Construction, Inc. | Serving the Greater San Francisco Bay Area
          and Its Surroundings.
        </title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
