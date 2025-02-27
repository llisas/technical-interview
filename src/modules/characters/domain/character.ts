import { Origin } from "./origin";
import { Location } from "./location";
export type Character =  { 
    id: number;
    name: string;
    status: "Alive" | "Dead";
    species: string;
    type: string;
    gender: string;
    origin: Origin;
    location: Location;
    image: string;
    episode: string[];
    url: string;
    created: string;
  }