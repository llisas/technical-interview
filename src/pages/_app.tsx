import '@/styles/global.css'
import type { AppProps } from 'next/app'
import Modal from 'react-modal';
Modal.setAppElement('#__next'); 

export default function rickyMortyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
