import { useState } from "react";
import { Player } from "@/types/Player";
import { SitePlayer } from "@/types/SitePlayer";
import { Site } from "@/types/Site";
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
import { Form, FormLabel } from "../ui/form";

type Props = {
  player: Player;
  site: Site;
};

const SearchCard = ({ player, site }: Props) => {
  // const [siteId, setSiteId] = useState(null);
  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
  //   setSiteId(event.target.value);
  // };

  // const nhlPlayer = useStore(currentPlayer);
  // console.log("SEARCH_CARD SITE:", site);
  console.log(player);
  const { playerId, firstName, lastName, birthCity } = player;
  // const { playerId, firstName, lastName, birthCity } = useStore(currentPlayer);
  // const pl = useStore(currentPlayer);
  // console.log("PLAYER:", player);
  // console.log(playerId);

  // export type Player = {
  //   playerId: number;
  //   firstName: string;
  //   lastName: string;
  //   birthDate: string;
  //   birthCity: string;
  //   birthCountry: string;

  //   hrId: string | null;
  //   hdbId: string | null;
  //   verified: boolean;
  // } | null;

  const hdbLink = `https://www.hockeydb.com/ihdb/stats/find_player.php?full_name=${lastName}&imageField.x=0&imageField.y=0`;
  const hrLink = `https://www.hockey-reference.com/search/search.fcgi?hint=&search=${lastName}&pid=&idx=`;

  return (
    <Card className="place-self-center">
      <CardHeader>
        <CardTitle>{`${firstName} ${lastName}`}</CardTitle>
        <CardDescription>{birthCity}</CardDescription>
      </CardHeader>

      <CardContent>
        {site ? (
          Site.HockeyDB
        ) : (
          <a href={hdbLink} target="_blank">
            HockeyDB
          </a>
        )}
        <br />
        {site ? (
          Site.HockeyReference
        ) : (
          <a href={hrLink} target="_blank">
            HockeyReference
          </a>
        )}
        {/* <Form> */}
        {/* <FormLabel>Site Id</FormLabel> */}
        {/* <label for="site-id">Site Id</label> */}
        <Input id="site-id" name="site-id" type="text" placeholder="Site Id" />
        {/* </Form> */}
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
    </Card>
  );
};

export { SearchCard };
