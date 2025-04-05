import { it, expect, test, beforeAll, afterEach } from "vitest";

import { cleanStores, keepMount } from "nanostores";
import {
  useTestStorageEngine,
  setTestStorageKey,
  cleanTestStorage,
  getTestStorage,
} from "@nanostores/persistent";

import { playersToUpdate } from "../playerStore";

beforeAll(() => {
  useTestStorageEngine();
});

afterEach(() => {
  cleanTestStorage();
});

it("listens for changes", () => {
  // setTestStorageKey()
  expect(playersToUpdate.get()).toEqual([
    {
      uuid: "0c7db5c1-a21c-42a9-ad09-5c55927a68dd",
      playerId: 8482175,
      name: "John Peterka",
      birthCity: "Munich",
      birthDate: "2002-01-14",
      hdb: "226507",
    },
    {
      uuid: "70305102-d1d4-4574-8ffd-d98c7f44ec8a",
      playerId: 8482452,
      name: "Elliot Desnoyers",
      birthCity: "Saint-Hyacinthe",
      birthDate: "",
      hr: "desnoel02",
    },
    {
      uuid: "9abb1698-617f-4740-84a5-cef33d7ddd44",
      playerId: 8482157,
      name: "William Cuylle",
      birthCity: "Toronto",
      birthDate: "2002-02-05",
      hr: "cuyllwi01",
    },
    {
      uuid: "3b59b688-fe42-4c69-ba36-015a37801e3f",
      playerId: 8482101,
      name: "Daniil Gushchin",
      birthCity: "Yekaterinburg",
      birthDate: "2002-02-06",
      hr: "gushcda01",
    },
    {
      uuid: "2a68e563-1259-465f-8615-be91a5893df7",
      playerId: 8484125,
      name: "Hunter McKown",
      birthCity: "San Jose",
      birthDate: "2002-04-18",
      hr: "mckowhu01",
    },
    {
      uuid: "f51a388e-6d54-420a-ba5f-c77d52ad8152",
      playerId: 8482679,
      name: "Matthew Coronato",
      birthCity: "Greenlawn",
      birthDate: "2002-11-14",
      hr: "coronma01",
    },
    {
      uuid: "38ea29d3-572c-4182-98cd-31aff1bb8857",
      playerId: 8482713,
      name: "Matthew Samoskevich",
      birthCity: "Newtown",
      birthDate: "2002-11-15",
      hdb: "223446",
    },
    {
      uuid: "750bdeab-eb05-4fec-a28f-83e9e261b503",
      playerId: 8484145,
      name: "Zachary Benson",
      birthCity: "Chilliwack",
      birthDate: "2005-05-12",
      hdb: "240680",
    },
    {
      uuid: "b6d803ee-50e3-4eec-97af-08bc35418126",
      playerId: 8482460,
      name: "Matthew Rempe",
      birthCity: "Calgary",
      birthDate: "2002-06-29",
      hdb: "216250",
    },
  ]);
});
