
import { useState, useEffect } from 'react';
import '@/styles/global.css';
import type { AppProps } from 'next/app';
import Modal from 'react-modal';
import CharacterCardSkelton from '@/components/characaterCardSkeleton/CharacterCardSkeleton'
Modal.setAppElement('#__next');

export default function rickyMortyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
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




