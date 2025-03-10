import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Component Imports
import { Button } from "@/components/ui/button";
import { PlayerSelection } from "@/components/PlayerSelection";
import { PlayerDashboard } from "./containers/table/PlayerDashboard";
import { PlayerCard } from "@/components/PlayerCard";

const Layout = () => {
  return (
    <ResizablePanelGroup
      direction="vertical"
      className="min-h-dvh max-w-md rounded-lg border md:container"
    >
      <ResizablePanel defaultSize={30}>
        <div className="flex h-full items-center justify-center p-2">
          <PlayerDashboard />
        </div>
      </ResizablePanel>
      {/* <ResizableHandle withHandle /> */}
      <ResizableHandle />
      <ResizablePanel defaultSize={35}>
        <div className="flex h-full items-center justify-center p-6">
          <Carousel className="w-full max-w-4xl">
            <CarouselContent>
              <CarouselItem className="basis-1/3">
                <PlayerCard />
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <PlayerCard />
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <PlayerCard />
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <PlayerCard />
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <PlayerCard />
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <PlayerCard />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={35}>
        <div className="flex h-full items-center justify-center p-6">
          <Carousel className="w-full max-w-4xl">
            <CarouselContent>
              <CarouselItem className="basis-1/3">
                <PlayerCard />
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <PlayerCard />
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <PlayerCard />
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <PlayerCard />
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <PlayerCard />
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <PlayerCard />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export { Layout };
