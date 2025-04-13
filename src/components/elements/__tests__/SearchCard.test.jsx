import React from "react";
import { prettyDom } from "@testing-library/dom";
import { SearchCard } from "../SearchCard";
import { cleanStores, keepMount } from "nanostores";
import { currentPlayer } from "@/stores/playerStore";
import { axe } from "vitest-axe";
import { render, screen } from "@testing-library/react";

afterEach(() => {
  cleanStores(currentPlayer);
});

describe("PlayerCard", () => {
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
    // console.log("current:", currentPlayer.get());
    render(<SearchCard />);

    expect(await axe(screen.getByTestId("card"))).toHaveNoViolations();
    // expect(
    //   await axe("<html><!-- accessible markup! --></html>")
    // ).toHaveNoViolations();
    expect(screen.getByTestId("card")).toHaveTextContent(/adam sykora/i);
    expect(screen.getByTestId("card")).toHaveTextContent(/peistany/i);

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
