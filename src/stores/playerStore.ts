import { atom, map } from "nanostores";
import { persistentAtom } from "@nanostores/persistent";

const pettersson = {
  playerId: 8483678,
  firstName: "Elias",
  lastName: "Pettersson",
  birthDate: "2004-02-16",
  birthCity: "Vasteras",
  birthCountry: "SWE",
  hrID: null,
  hdbID: null,
  verified: false,
};

// {
//   "firstName": "Zach",
//   "lastName": "Benson",
//   "birthDate": "2005-05-12",
//   "birthCity": "Chilliwack",
//   "birthCountry": "CAN",
//   "verified": false
// }

// export const currentPlayer = atom(pettersson);
export const currentPlayer = atom(null);

/**
 * @typedef {Object} PlayerObject
 * @property {number} playerId
 * @property {string} firstName
 * @property {string} lastName
 * @property {string} birthDate
 * @property {string} birthCity
 * @property {string} birthCountry
 * @property {string} hrID
 * @property {string} hdbID
 * @property {string} verified
 */

/** @type {import('nanostores').MapStore<Record<string, Player>>} */
// export const playersToUpdate = map();

export const playersToUpdate = persistentAtom<Player[]>("playersToUpdate", [], {
  encode: JSON.stringify,
  decode: JSON.parse,
});

export function addPlayerToUpdate(
  playerId,
  { id, name, birthCity, birthDate }
) {
  let p = {
    playerId,
    name,
    birthCity,
    birthDate,
  };
  // console.log("addPlayer:", playerId);
  if (!isNaN(id)) {
    p.hdb = id;
  } else {
    p.hr = id;
  }

  playersToUpdate.set([p, ...playersToUpdate.get()]);
}
