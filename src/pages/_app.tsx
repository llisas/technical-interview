/*import { useState, useEffect } from 'react';
import '@/styles/global.css';
import type { AppProps } from 'next/app';
import Modal from 'react-modal';
import CharacterCardSkeleton from '@/components/characaterCardSkeleton/CharacterCardSkeleton';
import { useRouter } from 'next/router';
Modal.setAppElement('#__next');

export default function rickyMortyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPath, setCurrentPath] = useState('');
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentPath(router.pathname);
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [currentPath]);

  

  return (
    <>
      {isLoading ? (
        <CharacterCardSkeleton />
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}*/

import { useState, useEffect } from 'react';
import '@/styles/global.css';
import type { AppProps } from 'next/app';
import Modal from 'react-modal';
import CharacterCardSkeleton from '@/components/characaterCardSkeleton/CharacterCardSkeleton';
import { useRouter } from 'next/router';
Modal.setAppElement('#__next');

export default function rickyMortyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPath, setCurrentPath] = useState('');
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentPath(router.pathname);
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [currentPath]);

  

  return (
        <Component {...pageProps} />
   
  );
}








