import "@/styles/global.css";
import "@/styles/global.dark.css";
import type { AppProps } from "next/app";
import Modal from "react-modal";
import DarkMode from "../components/ui/darkMode/DarkMode";
import { DarkModeProvider } from "src/context/darkMode/DarkModeContext";
Modal.setAppElement("#__next");

export default function rickyMortyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DarkModeProvider>
        <DarkMode />
        <Component {...pageProps} />
      </DarkModeProvider>
    </>
  );
}
