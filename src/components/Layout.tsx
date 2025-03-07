import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

// Component Imports
// import Button from '../components/Button.astro';
import { Button } from "@/components/ui/button";
import { PlayerSelection } from "@/components/PlayerSelection";
import { PlayerCard } from "@/components/PlayerCard";

const Layout = () => {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="max-w-md rounded-lg border md:min-w-5/6 m-4"
    >
      <ResizablePanel defaultSize={50}>
        <div className="flex h-auto items-center justify-center p-6">
          <span className="font-semibold">One</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={50}>
            {/* <div className="flex h-auto items-center justify-center p-6"> */}
            <div className="flex h-auto items-center justify-center p-6">
              <PlayerCard />
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={50}>
            <div className="flex h-auto items-center justify-center p-6">
              <span className="font-semibold">Three</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export { Layout };
