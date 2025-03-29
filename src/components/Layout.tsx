import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

import { Player } from "@/types/Player";
import { useStore } from "@nanostores/react";

// Component Imports
import { PlayerSelection } from "@/components/PlayerSelection";
import { PlayerDashboard } from "./containers/table/PlayerDashboard";

import hdbPlayers from "@/data/hdb-player-ids.json";
import hrPlayers from "@/data/hr-player-ids.json";

const Layout = () => {
  return (
    <ResizablePanelGroup
      direction="vertical"
      className="min-h-dvh max-w-md rounded-lg border md:container"
    >
      <ResizablePanel defaultSize={60}>
        <div className="flex h-full items-center justify-center p-2">
          <PlayerDashboard />
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={20}>
        <div className="flex h-full items-center justify-center p-6">
          <PlayerSelection site={hrPlayers} />
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={20}>
        <div className="flex h-full items-center justify-center p-6">
          <PlayerSelection site={hdbPlayers} />
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export { Layout };
