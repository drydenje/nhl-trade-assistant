import React from "react";
import { SearchCard } from "../SearchCard";
import { cleanStores, keepMount } from "nanostores";
import { currentPlayer } from "@/stores/playerStore";
import { render, screen } from "@testing-library/react";
import { axe } from "vitest-axe";

afterEach(() => {
  cleanStores(currentPlayer);
});

describe("PlayerCard", () => {
  // "Error: Not implemented: window.getComputedStyle(elt, pseudoElt)"
  // used with axe().toHaveNoViolations()
  // beforeAll(() => {
  // JSDom does not implement this and an error was being
  // thrown from vite-axe because of it.
  // window.getComputedStyle = () => {};
  // });
  // const { container } = render(temp);
  // const render = () => '<main><img src="#" alt="text thing"/></main>';
  // // pass anything that outputs html to axe
  // const html = render();
  // expect(await axe(html)).toHaveNoViolations();

  test.only("renders a SearchCard", async () => {
    currentPlayer.set({
      playerId: 8483669,
      firstName: "Adam",
      lastName: "Sykora",
      birthDate: "2004-09-07",
      birthCity: "Piestany",
      birthCountry: "SVK",
      verified: false,
    });
    keepMount(currentPlayer);

    const { container } = render(<SearchCard />);
    expect(await axe(container)).toHaveNoViolations();

    expect(screen.getByTestId("card")).toHaveTextContent(/adam sykora/i);
    expect(screen.getByTestId("card")).toHaveTextContent(/piestany/i);
    screen.debug();

    // expect(screen.getByLabelText("site-id")).toHaveAttribute("type", "text");
  });
});
