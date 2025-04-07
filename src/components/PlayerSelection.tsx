import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useStore } from "@nanostores/react";
import { PlayerCard } from "@/components/elements/PlayerCard";
import { Player } from "@/types/Player";
import { SitePlayer } from "@/types/SitePlayer";
import { currentPlayer } from "@/stores/playerStore";

// B:\Dev\src\nhl-trade-assistant\src\data\hdb-player-ids.json
const PlayerSelection = ({ site }: SitePlayer[]) => {
  const player = useStore(currentPlayer);

  if (player === null) return <h2>No Player Selected</h2>;

  const possibleMatches = site?.filter((x: SitePlayer) => {
    return x.name.includes(player?.lastName);
  });

  // console.log("P:", possibleMatches);

  return (
    <div>
      <Carousel className="w-full min-w-4xl">
        <CarouselContent>
          {possibleMatches?.map((p: SitePlayer) => {
            // console.log(p);
            return (
              <CarouselItem className="basis-1/3  w-3.5" key={p.id}>
                <PlayerCard player={p} />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export { PlayerSelection };
