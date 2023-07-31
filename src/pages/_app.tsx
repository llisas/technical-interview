import "@/styles/global.css";
import "@/styles/global.dark.css";
import type { AppProps } from "next/app";
import Modal from "react-modal";
import DarkMode from "../components/ui/darkMode/DarkMode";
import { DarkModeProvider } from "src/context/darkMode/DarkModeContext";
import { useTranslation } from 'react-i18next';

Modal.setAppElement("#__next");

export default function rickyMortyApp({ Component, pageProps }: AppProps) {
  const { i18n: i18nInstance } = useTranslation();

  const handleChangeLanguage = (language: string) => {
    i18nInstance.changeLanguage(language);
  };

  return (
    <>
      <DarkModeProvider>
        <DarkMode />
        <button onClick={() => handleChangeLanguage('en')}>English</button>
        <button onClick={() => handleChangeLanguage('es')}>Español</button>
        <Component {...pageProps} />
      </DarkModeProvider>
    </>
  );
}
