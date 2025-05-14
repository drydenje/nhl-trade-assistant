import { UUIDTypes } from "uuid";

export type UpdatePlayer = {
  playerId: number;
  uuid: UUIDTypes; // might have to switch back to string
  name: string;
  birthDate: string;
  birthCity: string;
  id: string | number | null | undefined;
  hdbId: null | undefined | string;
  hrId: null | undefined | string;
};

// {
//     "uuid": "c3108c32-b3c5-4797-875f-7117132cea81",
//     "playerId": 8452239,
//     "name": "David Volek",
//     "birthCity": "Prague",
//     "birthDate": "1966-06-16",
//     "hdbId": "5597"
// }
