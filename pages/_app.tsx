import type { AppProps } from 'next/app'
import './tw-input.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
