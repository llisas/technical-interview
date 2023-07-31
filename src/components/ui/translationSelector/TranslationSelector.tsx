import React from "react";
import { useTranslation } from "react-i18next";
import { FlagButton, FlagIcon } from "./TranslationSelector.styles"; // Ajusta la ruta según la ubicación real del archivo

const TranslationSelector = () => {
  const { i18n: i18nInstance } = useTranslation();
  const handleChangeLanguage = (language: string) => {
    i18nInstance.changeLanguage(language);
  };
  return (
    <>
      <FlagButton onClick={() => handleChangeLanguage("en")}>
        <FlagIcon role="img" aria-label="English Flag">
          🇬🇧
        </FlagIcon>
      </FlagButton>
      <FlagButton onClick={() => handleChangeLanguage("es")}>
        <FlagIcon role="img" aria-label="Spanish Flag">
          🇪🇸
        </FlagIcon>
      </FlagButton>
    </>
  );
};

export default TranslationSelector;
