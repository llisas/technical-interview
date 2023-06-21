import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import CharacterCard from "@/components/CharacterCard";
import { Result } from "src/modules/characters/domain/result";
import { Location } from "src/modules/characters/domain/location";

const mockOnClick = jest.fn();
const locationMock: Location = {
  name: "NY",
  url: "",
};
const characterDataMock: Result = {
  id: 123,
  name: "Rick",
  status: "alive",
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
      <CharacterCard character={characterDataMock} onClick={mockOnClick} />
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
