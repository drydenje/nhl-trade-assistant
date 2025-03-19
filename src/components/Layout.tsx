import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

import { Player } from "@/types/Player";
const pettersson: Player = {
  playerID: 8483678,
  firstName: "Elias",
  lastName: "Pettersson",
  birthDate: "2004-02-16",
  birthCity: "Vasteras",
  birthCountry: "SWE",
  hrID: "undefined",
  hdbID: "undefined",
  verified: false,
};

import React from "react";
export const SelectorContext = React.createContext(null);
import { useState } from "react";

// Component Imports
import { PlayerSelection } from "@/components/PlayerSelection";
import { PlayerDashboard } from "./containers/table/PlayerDashboard";

import hdbPlayers from "@/data/hdb-player-ids.json";
import hrPlayers from "@/data/hr-player-ids.json";

const Layout = () => {
  console.log("LEN:", hdbPlayers[0]);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  // setSelectedPlayer(pettersson);
  return (
    <ResizablePanelGroup
      direction="vertical"
      className="min-h-dvh max-w-md rounded-lg border md:container"
    >
      <SelectorContext value={selectedPlayer}>
        <ResizablePanel defaultSize={60}>
          <div className="flex h-full items-center justify-center p-2">
            <PlayerDashboard setSelectedPlayer={setSelectedPlayer} />
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={20}>
          <div className="flex h-full items-center justify-center p-6">
            <PlayerSelection player={pettersson} site={hrPlayers} />
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={20}>
          <div className="flex h-full items-center justify-center p-6">
            <PlayerSelection site={hdbPlayers} />
          </div>
        </ResizablePanel>
      </SelectorContext>
    </ResizablePanelGroup>
  );
};

export { Layout };
