import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PlayerCard } from "@/components/PlayerCard";
import { Player } from "@/types/Player";
import { SitePlayer } from "@/types/SitePlayer";

// B:\Dev\src\nhl-trade-assistant\src\data\hdb-player-ids.json
const PlayerSelection = (player: Player, site: SitePlayer[]) => {
  // const fileToParse = `./src/data/${site}-player-ids.json`;
  // console.log(fileToParse);
  // const hdbPlayers = JSON.parse(
  //   await fs.readFile(fileToParse, { encoding: "utf8" })
  // );
  console.log("S:", site);

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
              <CarouselItem className="basis-1/3" key={p.id}>
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
