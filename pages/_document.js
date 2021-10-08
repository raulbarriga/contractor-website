import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta name="HandheldFriendly" content="true" />
          <meta
            name="description"
            content="Get a free estimate for kitchen and bathroom remodeling, electrical, interior and exterior painting, plumbing, decks, driveway, roofing, apartment or house renovations, drywall or new construction."
          />
          <meta
            name="keywords"
            content="kitchen remodeling, bathroom remodeling, interior painting, exterior painting, drywall, roofing, apartment renovations, house renovations, new construction, driveway, decks, plumbing, electricity, remodeling contractors near me, licensed general contractor, general contractor near me, general contractor, home improvement contractors, construction companies near me, bay area general contractors, san francisco general contractors, san jose general contractors, fremont general contractors, tracy general contractors, hillsborough general contractors, home renovations, floor installation, house makeover, home makeover, apartment renovation,metal roofing, commercial roofing contractors, commercial roofing companies near me
          "
          />
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
