import {
  describe,
  it,
  expect,
  test,
  beforeAll,
  beforeEach,
  afterEach,
} from "vitest";

import { cleanStores, keepMount } from "nanostores";
import {
  useTestStorageEngine,
  setTestStorageKey,
  cleanTestStorage,
  getTestStorage,
} from "@nanostores/persistent";

import {
  currentPlayer,
  playersToUpdate,
  addPlayerToUpdate,
} from "../playerStore";

// beforeAll runs once, beforeEach resets each time
beforeAll(async (context) => {
  useTestStorageEngine();
});

afterEach(() => {
  cleanTestStorage();
});

describe("currentPlayer", () => {
  it("checks if the current player is null on initialization", () => {
    expect(currentPlayer.get()).toBe(null);
  });

  it("checks that a player can be set", () => {
    const rempe = {
      uuid: "26e81d12-692f-47f1-8542-043629280a88",
      playerId: 8482460,
      firstName: "Matt",
      lastName: "Rempe",
      birthDate: "2002-06-29",
      birthCity: "Calgary",
      birthCountry: "CAN",
      hrId: null,
      hdbId: null,
      verified: false,
    };
    currentPlayer.set(rempe);
    expect(currentPlayer.get()).toBe(rempe);
  });
});

describe("addPlayerToUpdate", () => {
  it.only("takes a player object (hockeyDB) and adds it to the playersToUpdate store", () => {
    const rempe = {
      uuid: "26e81d12-692f-47f1-8542-043629280a88",
      playerId: 8482460,
      name: "Matt Rempe",
      birthCity: "Calgary",
      birthDate: "2002-06-29",
      birthCountry: "CAN",
      id: 216250,
    };

    const expected = [
      {
        uuid: "bdce13e4-6a85-4948-ade6-18a41a920e47",
        playerId: 8482460,
        name: "Matt Rempe",
        birthCity: "Calgary",
        birthDate: "2002-06-29",
        hdbId: 216250,
      },
    ];
    addPlayerToUpdate(rempe.playerId, rempe);
    expect(playersToUpdate.get()).toBe(expected);
  });

  // it("takes a player object (hockey reference) and adds it to the playersToUpdate store", () => {
  //   const rempe = {
  //     uuid: "26e81d12-692f-47f1-8542-043629280a88",
  //     playerId: 8482460,
  //     name: "Matt Rempe",
  //     birthCity: "Calgary",
  //     birthDate: "2002-06-29",
  //     birthCountry: "CAN",
  //     hrId: "rempema01",
  //   };
  // });
});

// describe("playersToUpdate", () => {
// it("listens for changes", () => {
//   setTestStorageKey("settings:locale", "ru");
//   expect(currentPlayer.get()).toEqual({ locale: "ru" });
// });
// it("listens for changes", () => {
//   const players = [
//     {
//       uuid: "38ea29d3-572c-4182-98cd-31aff1bb8857",
//       playerId: 8482713,
//       name: "Matthew Samoskevich",
//       birthCity: "Newtown",
//       birthDate: "2002-11-15",
//       hdb: "223446",
//     },
//     {
//       uuid: "750bdeab-eb05-4fec-a28f-83e9e261b503",
//       playerId: 8484145,
//       name: "Zachary Benson",
//       birthCity: "Chilliwack",
//       birthDate: "2005-05-12",
//       hdb: "240680",
//     },
//     {
//       uuid: "b6d803ee-50e3-4eec-97af-08bc35418126",
//       playerId: 8482460,
//       name: "Matthew Rempe",
//       birthCity: "Calgary",
//       birthDate: "2002-06-29",
//       hdb: "216250",
//     },
//   ];
//   setTestStorageKey("playersToUpdate", JSON.stringify(players));
//   const p = JSON.parse(getTestStorage().playersToUpdate);
//   // console.log("P:", p);
//   expect(p).toEqual(players);
// });
// });
