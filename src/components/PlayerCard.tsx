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
  const { id, name, birthCity, birthDate } = player.player;
  return (
    <Card className="place-self-center">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{birthCity}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          <span>Birth Date: </span>
          {birthDate}
        </p>
        {id && (
          <p>
            <span>ID: </span>
            {id}
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
