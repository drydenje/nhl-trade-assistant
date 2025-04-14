import React from "react";
import { prettyDom } from "@testing-library/dom";
import { SearchCard } from "../SearchCard";
import { cleanStores, keepMount } from "nanostores";
import { currentPlayer } from "@/stores/playerStore";
import { axe } from "vitest-axe";
import { render, screen } from "@testing-library/react";

function InaccessibleForm() {
  // Form inputs must have an accessible name
  // Ref: 4.1.1 of W3C HTML Accessibility API Mappings 1.0
  return (
    <form>
      {/* <img src="#" /> */}
      <input id="username" />
    </form>
  );
}

function AccessibleForm() {
  return (
    <form>
      <label htmlFor="username">Username</label>
      <input id="username" placeholder="username" />
    </form>
  );
}

const temp = `
  <form>
    <input placeholder="email" />
  </form>
`;

afterEach(() => {
  cleanStores(currentPlayer);
});

describe("PlayerCard", () => {
  beforeAll(() => {
    // JSDom does not implement this and an error was being
    // thrown from vite-axe because of it.
    // "Error: Not implemented: window.getComputedStyle(elt, pseudoElt)"
    // window.getComputedStyle = () => {};
  });

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

    // const { container } = render(temp);
    // // console.log(InaccessibleForm());
    // expect(await axe(temp)).toHaveNoViolations();

    // const render = () => '<main><img src="#" alt="text thing"/></main>';
    // // pass anything that outputs html to axe
    // const html = render();
    // expect(await axe(html)).toHaveNoViolations();

    // console.log("current:", currentPlayer.get());

    // const { container } = render(<SearchCard />);
    // const { container } = render(<InaccessibleForm />);
    const { container } = render(<AccessibleForm />);
    expect(await axe(container)).toHaveNoViolations();

    // expect(screen.getByTestId("card")).toHaveTextContent(/adam sykora/i);
    // expect(screen.getByTestId("card")).toHaveTextContent(/piestany/i);

    // screen.debug();

    // Other possiblities to check text: not currently used

    // better error message
    // expect(screen.getByLabelText("id")).toHaveAttribute("type", "text");

    // screen.debug();
    // screen.debug(screen.getByTestId("card"));
    // expect(screen.getByTestId("card-content")).toHaveTextContent(
    //   "Birth Date: 2002-06-29"
    // );
    // expect(screen.getByText("Birth Date: 2002-06-29")).contains

    // expect(screen.getByText("Matt Rempe")).toBeInTheDocument();
  });
});
