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
import { configure, render, screen } from "@testing-library/react";
import { prettyDom } from "@testing-library/dom";
import { PlayerCard } from "../PlayerCard";
import "@testing-library/jest-dom";

configure({ testIdAttribute: "data-slot" });

describe("PlayerCard", () => {
  it("renders a PlayerCard when passed a HockeyReference id (eg: rempema01)", () => {
    const rempe = {
      id: "rempema01",
      name: "Matt Rempe",
      birthDate: "2002-06-29",
      birthCity: "Calgary",
    };

    render(<PlayerCard player={rempe} />);

    expect(screen.getByTestId("card")).toHaveTextContent("Matt Rempe");
    expect(screen.getByTestId("card")).toHaveTextContent("Calgary");
    expect(screen.getByTestId("card")).toHaveTextContent(
      "Birth Date: 2002-06-29"
    );
    expect(screen.getByTestId("card")).toHaveTextContent("ID: rempema01");

    // Other possiblities to check text: not currently used
    // screen.debug(screen.getByTestId("card"));
    // expect(screen.getByTestId("card-title")).toHaveTextContent("Matt Rempe");
    // expect(screen.getByTestId("card-content")).toHaveTextContent(
    //   "Birth Date: 2002-06-29"
    // );
    // expect(screen.getByText("Birth Date: 2002-06-29")).contains

    // expect(screen.getByText("Matt Rempe")).toBeInTheDocument();
  });

  it("renders a PlayerCard when passed a HockeyDB id (eg: 216250)", () => {
    const rempe = {
      id: "216250",
      name: "Matt Rempe",
      birthDate: "2002-06-29",
      birthCity: "Calgary",
    };

    render(<PlayerCard player={rempe} />);

    expect(screen.getByTestId("card")).toHaveTextContent("Matt Rempe");
    expect(screen.getByTestId("card")).toHaveTextContent("Calgary");
    expect(screen.getByTestId("card")).toHaveTextContent(
      "Birth Date: 2002-06-29"
    );
    expect(screen.getByTestId("card")).toHaveTextContent("ID: 216250");
  });

  it.only("renders nothing when passed a null player", () => {
    render(<PlayerCard player={null} />);
    screen.debug(screen.getByTestId("card"));
    expect(screen.getByTestId("card")).toHaveTextContent("No Player Selected");

    // expect(screen.getByTestId("card")).toHaveTextContent("Calgary");
    // expect(screen.getByTestId("card")).toHaveTextContent(
    //   "Birth Date: 2002-06-29"
    // );
    // expect(screen.getByTestId("card")).toHaveTextContent("ID: 216250");
  });
});
