
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CharacterModal from "./CharacterModal";
import  {mockCharacter} from  "./__mockData__/CharacterModalMockData";
import router from "next/router";

jest.mock("next/router", () => ({
    ...jest.requireActual("next/router"),
    push: jest.fn(),
  }));
  

describe("CharacterModal", () => {
  test("renders character modal with correct information", () => {
    const onClose = jest.fn();
    const { getByTestId, getByText } = render(
      <CharacterModal
        character={mockCharacter}
        isOpen={true}
        onClose={onClose}
      />
    );

    const closeButton = getByTestId("close-button");
    const characterName = getByText("RICK");
    const characterStatus = getByText("STATUS: alive");
    const characterSpecies = getByText("SPECIE: human");
    const characterOrigin = getByText("ORIGIN: Earth");
    const allInfoLink = getByText("ALL INFO");

    expect(closeButton).toBeInTheDocument();
    expect(characterName).toBeInTheDocument();
    expect(characterStatus).toBeInTheDocument();
    expect(characterSpecies).toBeInTheDocument();
    expect(characterOrigin).toBeInTheDocument();
    expect(allInfoLink).toBeInTheDocument();
  });

  test("calls onClose when close button is clicked", () => {
    const onClose = jest.fn();
    const { getByTestId } = render(
      <CharacterModal
        character={mockCharacter}
        isOpen={true}
        onClose={onClose}
      />
    );

    const closeButton = getByTestId("close-button");
    fireEvent.click(closeButton);

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  test("calls router.push when all info link is clicked", () => {
    const onClose = jest.fn();
    const { getByText } = render(
      <CharacterModal
        character={mockCharacter}
        isOpen={true}
        onClose={onClose}
      />
    );

    const allInfoLink = getByText("ALL INFO");
    fireEvent.click(allInfoLink);

    expect(router.push).toHaveBeenCalledTimes(1);
    expect(router.push).toHaveBeenCalledWith("/character-detail/1");
  });
});
