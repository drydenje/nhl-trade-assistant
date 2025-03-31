import { atom, map } from "nanostores";

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
export const playersToUpdate = map();

export function addPlayerToUpdate(playerId, id) {
  console.log("addPlayer:", playerId);
  if (!isNaN(id)) {
    console.log("hdb:", id);
  } else {
    console.log("hr:", id);
  }

  // playersToUpdate.setKey(playerId, { playerId, hrId, hdbId });
}
