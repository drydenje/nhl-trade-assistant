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

/*
it("renders a PlayerCard with proper information", () => {});
it("renders a PlayerCard with proper information", () => {});
it("renders a PlayerCard with proper information", () => {});
it("renders a PlayerCard with proper information", () => {});
*/

describe("PlayerCard", () => {
  it("renders a PlayerCard when passed a HockeyReference id", () => {
    // "hrId": "rempema01", "hdbId": "216250",
    const rempe = {
      id: "rempema01",
      name: "Matt Rempe",
      birthDate: "2002-06-29",
      birthCity: "Calgary",
    };
    // const card = <PlayerCard player={rempe} />;
    // render(card);
    // console.log()

    render(<PlayerCard player={rempe} />);
    // expect(screen.getByText('Matt Rempe'))
  });

  it("renders a PlayerCard when passed a HockeyDB id", () => {
    // "hrId": "rempema01", "hdbId": "216250",
    const rempe = {
      id: "216250",
      name: "Matt Rempe",
      birthDate: "2002-06-29",
      birthCity: "Calgary",
    };
    render(<PlayerCard player={rempe} />);
  });
});
