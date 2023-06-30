import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CharacterModal from "./CharacterModal";
import Modal from "react-modal";
import {mockCharacter} from "./__mockData__/CharacterModalMockData"
Modal.setAppElement(document.createElement("div"));

describe("CharacterModal", () => {

  it("renders the modal when isOpen is true", () => {
    const onClose = jest.fn();
    const { getByText } = render(
      <CharacterModal
        character={mockCharacter}
        isOpen={true}
        onClose={onClose}
      />
    );

    const characterNameElement = getByText(mockCharacter.name);
    expect(characterNameElement).toBeInTheDocument();
    fireEvent.click(getByText("X"));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("does not render the modal when isOpen is false", () => {
    const onClose = jest.fn();
    const { queryByTestId } = render(
      <CharacterModal
        character={mockCharacter}
        isOpen={false}
        onClose={onClose}
      />
    );

    const modal = queryByTestId("character-modal");
    expect(modal).not.toBeInTheDocument();
  });

  it("calls the onClose callback when the close button is clicked", () => {
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
    expect(onClose).toHaveBeenCalled();
  });
});
