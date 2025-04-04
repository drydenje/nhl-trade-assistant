export type Player = {
  uuid: string;
  playerId: number;
  firstName: string;
  lastName: string;
  birthDate: string;
  birthCity: string;
  birthCountry: string;
  hrId: string | null;
  hdbId: string | null;
  verified: boolean;
};
