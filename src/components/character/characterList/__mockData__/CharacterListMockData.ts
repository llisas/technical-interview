import { Character } from "src/modules/characters/domain/character";

export const mockCharacter: Character = {
    id: 1,
    name: "RICK",
    status: "Alive",
    species: "HUMAN",
    type: "",
    gender: "male",
    origin: {
      name: "Earth",
      url: "",
    },
    location: {
      name: "Earth",
      url: "",
    },
    image: "",
    episode: [],
    url: "",
    created: "",
  };
  
 export const mockCharacters: Character[] = [
    mockCharacter,
    {
      id: 2,
      name: "MORTY",
      status: "Alive",
      species: "HUMAN",
      type: "",
      gender: "male",
      origin: {
        name: "Earth",
        url: "",
      },
      location: {
        name: "Earth",
        url: "",
      },
      image: "",
      episode: [],
      url: "",
      created: "",
    },
  ];