import Head from 'next/head';

import "../styles/reset.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "remixicon/fonts/remixicon.css";
import "../styles/Card.css";
import "../styles/ModalCarousel.css";
import "../styles/index.scss";

const MyApp = ({ Component, pageProps }) => {
    return (<>
    <Head>
    <meta
            name="viewport"
            content="width=device-width,initial-scale=1"
          />
<title>JB & B Construction, Inc. | Serving the Greater San Francisco Bay Area and Its Surroundings.</title>
    </Head>
    <Component {...pageProps} />
    </>)
  }
  
  export default MyApp