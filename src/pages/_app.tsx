import type { AppProps } from 'next/app'
import { NavBar } from '../components/navbar'
import { globalStyles } from '../styles/global'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  )
}
