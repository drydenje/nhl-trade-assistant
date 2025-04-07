import {
  describe,
  it,
  expect,
  test,
  beforeAll,
  beforeEach,
  afterEach,
} from "vitest";
import React from "react";
import { render, screen } from "@testing-library/react";
import { PlayerCard } from "../PlayerCard";

describe("PlayerCard", () => {
  it("renders a PlayerCard with proper information", () => {
    // "hrId": "rempema01", "hdbId": "216250",
    const rempe = {
      // id: number | string,
      id: "rempema01",
      name: "Matt Rempe",
      birthDate: "2002-06-29",
      birthCity: "Calgary",
    };
    render(<PlayerCard player={rempe} />);
  });
});
