import { atom } from "nanostores";
import { persistentAtom } from "@nanostores/persistent";
import { v4 as uuidv4 } from "uuid";
import { SitePlayer } from "@/types/SitePlayer";
import { Player } from "@/types/Player";

// 8482460 Matt	Rempe	2002-06-29	Calgary	CAN	rempema01	216250	false

// [
//   {
//     uuid: "88163eda-17d4-4da9-9030-972fa327a798",
//     playerId: 8482918,
//     name: "Sergei Klimovich",
//     birthCity: "Novosibirsk",
//     birthDate: "1974-03-08",
//     hr: "klimose01",
//   },
//   {
//     uuid: "2da48a98-23cc-4073-9588-f9ba2adbcc6c",
//     playerId: 8482460,
//     name: "Matt Rempe",
//     birthCity: "Calgary",
//     birthDate: "2002-06-29",
//     hr: "rempema01",
//   },
// ];

export const currentPlayer = atom(null);

/**
 * @typedef {Object} Player
 * @property {string} birthCity
 * @property {string} birthDate
 * @property {string} hdb
 * @property {string} name
 * @property {number} playerId
 * @property {string} uuid
 */

/** @type {import('nanostores').MapStore<Record<string, Player>>} */

export const playersToUpdate = persistentAtom<Player[]>("playersToUpdate", [], {
  encode: JSON.stringify,
  decode: JSON.parse,
});

export function addPlayerToUpdate(
  playerId: number,
  { id, name, birthCity, birthDate }: SitePlayer
) {
  let p: Player = {
    uuid: uuidv4(),
    playerId,
    name,
    birthCity,
    birthDate,
  };

  if (!isNaN(id)) {
    p.hdbId = id;
  } else {
    p.hrId = id;
  }

  playersToUpdate.set([p, ...playersToUpdate.get()]);
}

export function removePlayerToUpdate(uuid) {
  const remainingPlayers = playersToUpdate.get().filter((p) => p.uuid != uuid);
  playersToUpdate.set([...remainingPlayers]);
}
