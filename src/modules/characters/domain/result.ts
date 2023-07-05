import { Origin } from "./origin";
import { Location } from "./location";
export type Result =  { // TODO CHANGE NAME TO CHARACTER
    id: number;
    name: string;
    status: string;
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