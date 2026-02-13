import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import SEOConfig from '../next-seo.config';
import { OrganizationSchema } from '../components/SEO';
import '../styles/globals.css';
import '../utils/fontAwesome';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEOConfig} />

      <Head>
        <link rel="icon" type="image/png" href='/favicon.png' />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="google-adsense-account" content="ca-pub-1862946013812607" />

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />

        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-4WXDW7C6GT"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-4WXDW7C6GT', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />

        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1862946013812607"
          crossOrigin="anonymous"
        ></script>
      </Head>

      {/* Organization Schema */}
      <OrganizationSchema />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
