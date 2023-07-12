import React from "react";
import { render } from "@testing-library/react";
import CharacterDetail from "./CharacterDetail";
import {mockCharacter} from "./__mockData__/characterDetailMock"

describe("CharacterDetail", () => {
  it("renderiza el detalle del personaje correctamente", () => {
    const { getByText, getByAltText } = render(
      <CharacterDetail character={mockCharacter} />
    );
    expect(getByText("Garment District Rick")).toBeInTheDocument();
    expect(getByText("SPECIE: Human")).toBeInTheDocument();
    expect(getByText("STATUS: Dead")).toBeInTheDocument();
  });
});