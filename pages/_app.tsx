import '../styles/global.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {

  return (
    <>
          <Head>
            <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;700&family=Poppins&display=swap" rel="stylesheet"/>
          </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
