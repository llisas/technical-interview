import React, { useEffect, useState } from "react";
import ToggleButton from "../../ui/toogleButton/ToggleButton";
import { CenteredDiv } from "./CharacterFilter.styles";
import i18n from "../../../../i18n";
import { useTranslation } from "react-i18next";

interface CharacterFilterProps {
  isOrderByName: boolean;
  isOrderBySpecie: boolean;
  isOrderByStatus: boolean;
  handleOrderByName: () => void;
  handleOrderBySpecie: () => void;
  handleOrderByStatus: () => void;
}

const CharacterFilter: React.FunctionComponent<CharacterFilterProps> = ({
  isOrderByName,
  isOrderBySpecie,
  isOrderByStatus,
  handleOrderByName,
  handleOrderBySpecie,
  handleOrderByStatus,
}) => {
  const { t } = useTranslation();
  const [byNamei18n, setByNamei18n] = useState("");
  const [bySpeciei18n, setBySpeciei18n] = useState("");
  const [byStatusi18n, setByStatusi18n] = useState("");
 

  useEffect(() => {
    setByNamei18n(i18n.t("orderByName").toLocaleUpperCase());
    setBySpeciei18n(i18n.t("orderBySpecie").toLocaleUpperCase());
    setByStatusi18n(i18n.t("orderByStatus").toLocaleUpperCase());
  }, []);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setByNamei18n(t("orderByName").toLocaleUpperCase());
      setBySpeciei18n(t("orderBySpecie").toLocaleUpperCase());
      setByStatusi18n(t("orderByStatus").toLocaleUpperCase());
    }
  }, [t]);

  return (
    <CenteredDiv>
      <ToggleButton
        name={byNamei18n}
        active={isOrderByName}
        onToggle={handleOrderByName}
      />
      <ToggleButton
        name={bySpeciei18n}
        active={isOrderBySpecie}
        onToggle={handleOrderBySpecie}
      />
      <ToggleButton
        name={byStatusi18n}
        active={isOrderByStatus}
        onToggle={handleOrderByStatus}
      />
    </CenteredDiv>
  );
};

export default CharacterFilter;
