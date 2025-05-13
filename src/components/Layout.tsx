import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

import { Player } from "@/types/Player";
import { SitePlayer } from "@/types/SitePlayer";
import { useStore } from "@nanostores/react";
import { Site } from "@/types/Site";

// Component Imports
import { PlayerSelection } from "@/components/PlayerSelection";
import { PlayerDashboard } from "./containers/table/PlayerDashboard";
import { AppSidebar } from "@/components/containers/sidebar/AppSidebar";

import hdbPlayers from "@/data/hdb-player-ids.json";
import hrPlayers from "@/data/hr-player-ids.json";

const Layout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <ResizablePanelGroup
        direction="vertical"
        className="min-h-dvh max-w-md rounded-lg border md:container"
      >
        <ResizablePanel defaultSize={50}>
          <div className="flex h-full items-center justify-center p-2">
            <PlayerDashboard />
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={25}>
          <div className="flex h-full items-center justify-center p-6">
            <PlayerSelection
              sitePlayers={hrPlayers}
              site={Site.HockeyReference}
            />
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={25}>
          <div className="flex h-full items-center justify-center p-6">
            <PlayerSelection sitePlayers={hdbPlayers} site={Site.HockeyDB} />
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </SidebarProvider>
  );
};

export { Layout };
