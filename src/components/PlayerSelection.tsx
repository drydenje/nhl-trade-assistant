import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PlayerCard } from "@/components/PlayerCard";
import { Player } from "@/types/Player";
import hdbPlayers from "@/data/hdb-player-ids.json";
// import hrPlayers from "@/data/hr-player-ids.json"

const PlayerSelection = (nhlPlayer: Player) => {
  // console.log(nhlPlayer);
  console.log(nhlPlayer.lastName);
  const p = hdbPlayers.filter((player) => {
    return player.name.includes(nhlPlayer.lastName);
  });

  // todo: re-run the hdb and hr scraping scripts,
  // todo: too many players are missing

  console.log(nhlPlayer);
  console.log(p);

  return (
    <div>
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
  );
};

export { PlayerSelection };
