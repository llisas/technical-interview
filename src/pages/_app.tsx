import "@/styles/global.css";
import "@/styles/global.dark.css";
import type { AppProps } from "next/app";
import Modal from "react-modal";
import DarkModeSelector from "../components/ui/darkModeSelector/DarkModeSelector";
import TranslationSelector from "@/components/ui/translationSelector/TranslationSelector";
import { DarkModeProvider } from "src/context/darkMode/DarkModeContext";

Modal.setAppElement("#__next");

export default function rickyMortyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DarkModeProvider>
        <div className="header-container">
          <div >
            <DarkModeSelector />
          </div>
          <div >
            <TranslationSelector />
          </div>
        </div>
        <Component {...pageProps} />
      </DarkModeProvider>
    </>
  );
}
