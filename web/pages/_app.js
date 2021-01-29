import Head from 'next/head'
import Header from 'components/header'
import Footer from 'components/footer'

import 'styles/global.css'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          content="width=device-width,initial-scale=1,shrink-to-fit=no"
          name="viewport"
        />
        <link
          rel="preload"
          href="/fonts/Montserrat-Bold.ttf"
          as="font"
          crossOrigin=" "
        />
        <link
          rel="preload"
          href="/fonts/Montserrat-Italic.ttf"
          as="font"
          crossOrigin=" "
        />
        <link
          rel="preload"
          href="/fonts/Montserrat-Regular.ttf"
          as="font"
          crossOrigin=" "
        />
      </Head>
      <div id="blog">
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
        <hr/>
        <Footer />
      </div>
    </>
  )
}

export default MyApp
