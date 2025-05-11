import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { v4 as uuidv4 } from "uuid";
import { useStore } from "@nanostores/react";
import { PlayerCard } from "@/components/elements/PlayerCard";
import { SearchCard } from "@/components/elements/SearchCard";
import { Player } from "@/types/Player";
import { SitePlayer } from "@/types/SitePlayer";
import { currentPlayer } from "@/stores/playerStore";
import latinize from "latinize";

// B:\Dev\src\nhl-trade-assistant\src\data\hdb-player-ids.json
// const PlayerSelection = ({ site }: SitePlayer[]) => {
const PlayerSelection = ({ site }: { site: SitePlayer[] }) => {
  // const PlayerSelection = (site: SitePlayer[]) => {
  const player = useStore(currentPlayer);

  if (player === null) return <h2>No Player Selected</h2>;

  const selectedPlayer = player?.lastName.toLowerCase();

  const possibleMatches = site?.filter((x: SitePlayer) => {
    // const tempName = x.name.toLowerCase();
    // console.log("1:", tempName);
    // const selectedPlayer = player?.lastName.toLowerCase();
    // console.log("2:", selectedPlayer);
    return x.name.includes(latinize(player?.lastName));
  });

  // console.log("Players:", possibleMatches);

  return (
    <div>
      <Carousel className="w-full min-w-4xl">
        <CarouselContent>
          {possibleMatches?.map((p: SitePlayer) => {
            // console.log("P:", p);
            return (
              <CarouselItem className="basis-1/3  w-3.5" key={uuidv4()}>
                <PlayerCard player={p} />
              </CarouselItem>
            );
          })}
          {/* <CarouselItem className="basis-1/3  w-3.5" key={uuidv4()}>
            <SearchCard />
          </CarouselItem> */}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export { PlayerSelection };
