/*import '@/styles/global.css'
import type { AppProps } from 'next/app'
import Modal from 'react-modal';
Modal.setAppElement('#__next'); 

export default function rickyMortyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}*/


import { useState, useEffect } from 'react';
import '@/styles/global.css';
import type { AppProps } from 'next/app';
import Modal from 'react-modal';
import CharacterCardSkelton from '@/components/characaterCardSkeleton/CharacterCardSkeleton'
Modal.setAppElement('#__next');


export default function rickyMortyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simular una carga de 5 segundos
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    // Limpiar el temporizador al desmontar el componente
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <CharacterCardSkelton />
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}




