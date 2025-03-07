import { ColumnDef } from "@tanstack/react-table";

const unfilteredPlayers = [
  {
    id: 8474668,
    headshot: "https://assets.nhle.com/mugs/nhl/20112012/VAN/8474668.png",
    firstName: {
      default: "Dale",
    },
    lastName: {
      default: "Weise",
    },
    sweaterNumber: 32,
    positionCode: "R",
    shootsCatches: "R",
    heightInInches: 74,
    weightInPounds: 196,
    heightInCentimeters: 188,
    weightInKilograms: 89,
    birthDate: "1988-08-05",
    birthCity: {
      default: "Winnipeg",
    },
    birthCountry: "CAN",
    birthStateProvince: {
      default: "Manitoba",
    },
    hrID: null,
    hdbID: null,
    verified: false,
  },
].map((player) => {
  return {
    playerID: player.id,
    firstName: player.firstName.default,
    lastName: player.lastName.default,
    birthDate: player.birthDate,
    birthCity: player.birthCity.default,
    birthCountry: player.birthCountry,
    hrID: player.hrID,
    hdbID: player.hdbID,
    verified: player.verified,
  };
});

console.log("P:", unfilteredPlayers);

export type Player = {
  playerID: number;
  firstName: string;
  lastName: string;
  birthDate: string;
  birthCity: string;
  birthCountry: string;
  hrID: string | null;
  hdbID: string | null;
  verified: boolean;
};

export const players: Player[] = unfilteredPlayers;

export const columns: ColumnDef<Player>[] = [
  { accessorKey: "playerID", header: "PlayerID" },
  { accessorKey: "firstName", header: "First Name" },
  { accessorKey: "lastName", header: "Last Name" },
  { accessorKey: "birthDate", header: "BirthDate" },
  { accessorKey: "birthCity", header: "City" },
  { accessorKey: "birthCountry", header: "Country" },
  { accessorKey: "hrID", header: "hrID" },
  { accessorKey: "hdbID", header: "hdbID" },
  { accessorKey: "verified", header: "Verified" },
];
