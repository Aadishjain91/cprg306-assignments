import { AppProps } from 'next/app'
import './styles.css'
export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}