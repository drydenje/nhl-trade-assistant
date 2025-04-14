import { useState } from "react";
import { Player } from "@/types/Player";
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
import { Input } from "@/components/ui/input";

import { useStore } from "@nanostores/react";
import { addPlayerToUpdate, currentPlayer } from "@/stores/playerStore";

const SearchCard = () => {
  const [siteId, setSiteId] = useState(null);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSiteId(event.target.value);
  };

  // const nhlPlayer = useStore(currentPlayer);
  const { playerId, firstName, lastName, birthCity } = useStore(currentPlayer);
  const hdbLink = `https://www.hockeydb.com/ihdb/stats/find_player.php?full_name=${lastName}&imageField.x=0&imageField.y=0`;
  const hrLink = `https://www.hockey-reference.com/search/search.fcgi?hint=&search=${lastName}&pid=&idx=`;

  return (
    <Card className="place-self-center">
      <form>
        <CardHeader>
          <CardTitle>{`${firstName} ${lastName}`}</CardTitle>
          <CardDescription>{birthCity}</CardDescription>
        </CardHeader>

        <CardContent>
          <a href={hdbLink} target="_blank">
            HockeyDB
          </a>
          <br />
          <a href={hrLink} target="_blank">
            HockeyReference
          </a>

          <Input
            id="site-id"
            name="site-id"
            type="text"
            placeholder="Site Id"
          />
        </CardContent>

        <CardFooter className="self-center">
          <Button
            onClick={() => {
              // addPlayerToUpdate(nhlPlayer.playerId, player);
              console.log(`${firstName} ${lastName}: ${playerId} -> `);
            }}
          >
            Select
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export { SearchCard };
