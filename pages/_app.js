import '../styles/globals.css'
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
