import { screen, render, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import CharacterList from "@/components/characterList/CharacterList";
import { Result } from "../domain/result";
import App from "../../../pages/_app"

const mockCharacters: Result[] = [
  {
    id: 1,
    name: "Rick",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Male",
    origin: {
      name: "Earth (C-137)",
      url: "https://rickandmortyapi.com/api/location/1"
    },
    location: {
      name: "Citadel of Ricks",
      url: "https://rickandmortyapi.com/api/location/3"
    },
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    episode: [
      "https://rickandmortyapi.com/api/episode/1",
      "https://rickandmortyapi.com/api/episode/2"
    ],
    url: "https://rickandmortyapi.com/api/character/1",
    created: "2017-11-04T18:48:46.250Z"
  },
  {
    id: 2,
    name: "Morty",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Male",
    origin: {
      name: "Earth (C-137)",
      url: "https://rickandmortyapi.com/api/location/1"
    },
    location: {
      name: "Citadel of Ricks",
      url: "https://rickandmortyapi.com/api/location/3"
    },
    image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    episode: [
      "https://rickandmortyapi.com/api/episode/1",
      "https://rickandmortyapi.com/api/episode/2"
    ],
    url: "https://rickandmortyapi.com/api/character/2",
    created: "2017-11-04T18:50:46.250Z"
  }
];

const server = setupServer(
  rest.get("https://rickandmortyapi.com/api/character/?name=rick", (req, res, ctx) => {
    return res(ctx.json({ results: mockCharacters }));
  })
);


it("should have the correct character list by name", async () => {
  const handleOpenModal = jest.fn();
  const handleCloseModal = jest.fn();
  render(
    <CharacterList
      characters={mockCharacters}
      isModalOpen={false}
      selectedCharacter={null}
      handleOpenModal={handleOpenModal}
      handleCloseModal={handleCloseModal}
    />
  );
  await waitFor(() => {
    expect(screen.getByText("Rick")).toBeInTheDocument();
    expect(screen.getByText("Morty")).toBeInTheDocument();
  });
});


