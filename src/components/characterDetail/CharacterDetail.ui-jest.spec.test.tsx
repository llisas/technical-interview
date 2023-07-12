import React from "react";
import { render } from "@testing-library/react";
import CharacterDetail from "./CharacterDetail";
import {mockCharacter} from "./__mockData__/characterDetailMock"

describe("CharacterDetail", () => {
  it("render compomente with correct character detail", () => {
    const { getByText } = render(
      <CharacterDetail character={mockCharacter} />
    );
    expect(getByText("Garment District Rick")).toBeInTheDocument();
    expect(getByText("SPECIE: Human")).toBeInTheDocument();
    expect(getByText("STATUS: Dead")).toBeInTheDocument();
  });
});