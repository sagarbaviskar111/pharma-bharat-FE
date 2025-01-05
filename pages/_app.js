import Head from 'next/head';
import '../styles/globals.css';
import '../utils/fontAwesome'; // Import the fontAwesome setup

function MyApp({ Component, pageProps }) {

  return <>
    <Head>
      {/* <link rel="icon" href="/public/favicon.png" /> */}
      <link rel="icon" type="image/png" href='/favicon.png' />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />


      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      />
      <meta
        name="description"
        content="Explore top pharmacy and healthcare job opportunities. Find jobs in Clinical Research, Pharmacovigilance, Medical Coding, and more."
      />
      <meta name="keywords" content="Pharmacy Jobs, Healthcare Careers, Pharmacovigilance, Clinical Research Jobs" />
      <meta name="author" content="Pharma Talent Hub" />
      <meta name="google-adsense-account" content="ca-pub-1862946013812607"/>


    </Head>
    <Head>
      {/* Google Analytics Tag */}
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1862946013812607"
     crossorigin="anonymous"></script>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-4WXDW7C6GT"></script>

      <script
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-4WXDW7C6GT');
            `,
        }}
      />
      <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1862946013812607"
            crossorigin="anonymous"
          ></script>
    </Head>
    <Component {...pageProps} />

  </>;
}

export default MyApp;