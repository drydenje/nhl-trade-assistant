import { SitePlayer } from "@/types/SitePlayer";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const PlayerCard = (player: SitePlayer) => {
  return (
    <Card className="place-self-center">
      <CardHeader>
        <CardTitle>{player.name}</CardTitle>
        <CardDescription>{player.birthCity}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          <span>Birth Date: </span>
          {player.birthDate}
        </p>
        {player?.id && (
          <p>
            <span>HdbID: </span>
            {player.id}
          </p>
        )}
        {player?.id && (
          <p>
            <span>HrID: </span>
            {player.id}
          </p>
        )}
      </CardContent>
      {/* <CardFooter>
        <p>Card Footer</p>
      </CardFooter> */}
    </Card>
  );
};

export { PlayerCard };
