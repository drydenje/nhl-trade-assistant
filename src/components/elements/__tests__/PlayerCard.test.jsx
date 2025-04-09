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

configure({ testIdAttribute: "data-slot" });

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
    // screen.debug(screen.getByTestId("card"));
    expect(screen.getByTestId("card-title")).toHaveTextContent("Matt Rempe");
    // expect(screen.getByText("Birth Date:")).toHaveTextContent("2002-06-29");
    expect(screen.getByText("Mat")).toHaveTextContent("2002-06-29");

    // expect(screen.getByText("Matt Rempe")).toBeInTheDocument();
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

const temp = (
  <div
    data-slot="card"
    class="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm place-self-center"
  >
    <div data-slot="card-header" class="flex flex-col gap-1.5 px-6">
      <div data-slot="card-title" class="leading-none font-semibold">
        Michal Sykora
      </div>
      <div data-slot="card-description" class="text-muted-foreground text-sm">
        Pardubice
      </div>
    </div>
    <div data-slot="card-content" class="px-6">
      <p>
        <span>Birth Date: </span>1973-07-05
      </p>
      <p>
        <span>ID: </span>sykormi01
      </p>
    </div>
    <div data-slot="card-footer" class="flex items-center px-6 self-center">
      <button
        data-slot="button"
        class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-9 px-4 py-2 has-[&gt;svg]:px-3"
      >
        Select
      </button>
    </div>
  </div>
);
