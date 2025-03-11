import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PlayerCard } from "@/components/PlayerCard";
import { Player } from "@/types/Player";
import fs from "node:fs/promises";
// import hdbPlayers from "@/data/hdb-player-ids copy.json";
// import hrPlayers from "@/data/hr-player-ids.json"
// B:\Dev\src\nhl-trade-assistant\src\data\hdb-player-ids.json
const PlayerSelection = async ({ player, site }) => {
  const fileToParse = `./src/data/${site}-player-ids.json`;
  console.log(fileToParse);
  const hdbPlayers = JSON.parse(
    await fs.readFile(fileToParse, { encoding: "utf8" })
  );
  console.log(site);
  const possibleMatches = hdbPlayers.filter((x) => {
    return x.name.includes(player.lastName);
  });

  // console.log("P:", possibleMatches);

  return (
    <div>
      <Carousel className="w-full min-w-4xl">
        <CarouselContent>
          {possibleMatches.map((p) => {
            // console.log(p);
            return (
              <CarouselItem className="basis-1/3" key={p.hdbID}>
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
