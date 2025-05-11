import { UUIDTypes } from "uuid";

export type SitePlayer = {
  id: string;
  uuid: UUIDTypes;
  name: string;
  birthDate: string;
  birthCity: string;
};
