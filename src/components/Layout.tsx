import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

const pettersson = {
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

import { useState } from "react";

// Component Imports
import { Button } from "@/components/ui/button";
import { PlayerSelection } from "@/components/PlayerSelection";
import { PlayerDashboard } from "./containers/table/PlayerDashboard";
import { PlayerCard } from "@/components/PlayerCard";

import hdbPlayers from "@/data/hdb-player-ids.json";
import hrPlayers from "@/data/hr-player-ids.json";

const Layout = () => {
  const [selectedPlayer, setSelectedPlayer] = useState(pettersson);
  return (
    <ResizablePanelGroup
      direction="vertical"
      className="min-h-dvh max-w-md rounded-lg border md:container"
    >
      <ResizablePanel defaultSize={60}>
        <div className="flex h-full items-center justify-center p-2">
          <PlayerDashboard setSelectedPlayer={setSelectedPlayer} />
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={20}>
        <div className="flex h-full items-center justify-center p-6">
          <PlayerSelection player={selectedPlayer} site={hrPlayers} />
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={20}>
        <div className="flex h-full items-center justify-center p-6">
          <PlayerSelection player={selectedPlayer} site={hdbPlayers} />
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export { Layout };
