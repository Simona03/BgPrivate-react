import '../styles/globals.css'
import '../styles/home.scss'
import "../styles/navigation.scss"
import "../styles/responsive.scss"
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
