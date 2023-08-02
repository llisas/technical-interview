import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import CharacterCard from "./CharacterCard";
import { Character } from "../../../modules/characters/domain/character";
import { Location } from "../../..//modules/characters/domain/location";

const mockOnClick = jest.fn();
const locationMock: Location = {
  name: "NY",
  url: "",
};
const characterDataMock: Character = {
  id: 123,
  name: "Rick",
  status: "Alive",
  species: "human",
  type: "cibor",
  gender: "male",
  origin: {
    name: "NY",
    url: "",
  },
  location: locationMock,
  image: "",
  episode: [],
  url: "",
  created: "",
};
describe("CharacterCard", () => {
  it("Render name correctly ", () => {
    const { getByText } = render(
      <CharacterCard character={characterDataMock} onClick={mockOnClick} />//what click does? remove elements not used like onclick
    );
    expect(getByText(characterDataMock.name)).toBeInTheDocument();
  });

  it("Render species correctly ", () => {
    const { getByText } = render(
      <CharacterCard character={characterDataMock} onClick={mockOnClick} />
    );
    expect(getByText(characterDataMock.species)).toBeInTheDocument();
  });

  it("call onClicked", () => {
    const { container } = render(
      <CharacterCard character={characterDataMock} onClick={mockOnClick} />
    );
    fireEvent.click(container.firstChild!);
    expect(mockOnClick).toHaveBeenCalled();
  });
});
