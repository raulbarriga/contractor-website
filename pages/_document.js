import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta name="HandheldFriendly" content="true" />
          <meta name="description" content="General contractor serving the Greater San Francisco Bay Area. We also serve its surrounding regions." />
          <link
            href="https://fonts.googleapis.com/css2?family=Barlow:wght@100;200;400;500&family=Nunito:wght@300;400&family=Playfair+Display:wght@400;700&display=swap"
            rel="stylesheet"
          /> 
        </Head>
        <body>
          {/* Main has the things from pages/index.js */}
          <Main />
          <NextScript />
          {/* Here we will mount our modal portal below the Main */}
          <div id="modal-root" />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
