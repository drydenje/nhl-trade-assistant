import { SitePlayer } from "@/types/SitePlayer";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useStore } from "@nanostores/react";
import { addPlayerToUpdate, currentPlayer } from "@/stores/playerStore";

const PlayerCard = (player: SitePlayer) => {
  const { id, name, birthCity, birthDate } = player.player;
  const nhlPlayer = useStore(currentPlayer);

  return (
    <Card className="place-self-center">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{birthCity}</CardDescription>
      </CardHeader>

      <CardContent>
        <p>
          {/* <span>Birth Date: </span> */}
          Birth Date: {birthDate}
        </p>
        {id && (
          <p>
            <span>ID: </span>
            {id}
          </p>
        )}
      </CardContent>

      <CardFooter className="self-center">
        <Button
          onClick={() => {
            addPlayerToUpdate(nhlPlayer.playerId, player.player);
          }}
        >
          Select
        </Button>
      </CardFooter>
    </Card>
  );
};

export { PlayerCard };
