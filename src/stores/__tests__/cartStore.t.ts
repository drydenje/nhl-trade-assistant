import { it, expect, test, beforeAll, beforeEach, afterEach } from "vitest";

import { cleanStores, keepMount } from "nanostores";
import {
  useTestStorageEngine,
  setTestStorageKey,
  cleanTestStorage,
  getTestStorage,
} from "@nanostores/persistent";

import { currentPlayer, playersToUpdate } from "../playerStore";

// beforeAll runs once, beforeEach resets each time
beforeAll(async (context) => {
  useTestStorageEngine();
});

afterEach(() => {
  cleanTestStorage();
});

it.only("listens for changes", () => {
  setTestStorageKey("settings:locale", "ru");
  expect(currentPlayer.get()).toEqual({ locale: "ru" });
});
