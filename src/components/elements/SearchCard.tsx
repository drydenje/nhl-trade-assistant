import { useState, ChangeEvent, MouseEvent } from "react";
import { Player } from "@/types/Player";
import { SitePlayer } from "@/types/SitePlayer";
import { UpdatePlayer } from "@/types/UpdatePlayer";
import { Site } from "@/types/Site";
import { Button } from "@/components/ui/button";
import { v4 as uuidv4 } from "uuid";

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
  // console.log(player);
  const { playerId, firstName, lastName, birthCity, birthDate }: Player =
    player;
  const [siteId, setSiteId] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSiteId(event.target.value);
  };

  const handleButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    // console.log(player);
    const p: UpdatePlayer = {
      playerId,
      id: siteId,
      uuid: uuidv4(),
      name: `${firstName} ${lastName}`,
      birthCity,
      birthDate,
    };

    console.log(p);
    // console.log(`SITE ID: ${siteId}`);

    // playerId: number, { id, name, birthCity, birthDate };

    // const target = event.target as HTMLButtonElement;
    // if (target) console.log(`VAL: "${target.value}"`);

    // addPlayerToUpdate(nhlPlayer.playerId, player);
    // console.log(`${firstName} ${lastName}: ${playerId} -> `);
    // console.log(`${playerId} -> `);
    // console.log(player);
    // console.log(e);

    // uuid: uuidv4(),
    // playerId,
    // name,
    // birthCity,
    // birthDate,
    // id: null,
    // hdbId: undefined,
    // hrId: undefined,
  };

  // const nhlPlayer = useStore(currentPlayer);
  // console.log("SEARCH_CARD SITE:", site);

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
        {site === Site.HockeyDB && (
          <a href={hdbLink} target="_blank">
            HockeyDB
          </a>
        )}
        {/* <br /> */}
        {site === Site.HockeyReference && (
          <a href={hrLink} target="_blank">
            HockeyReference
          </a>
        )}
        {/* <Form> */}
        {/* <FormLabel>Site Id</FormLabel> */}
        {/* <label for="site-id">Site Id</label> */}
        <Input
          id="site-id"
          name="site-id"
          type="text"
          placeholder="Site Id"
          value={siteId}
          onChange={handleInputChange}
        />
        {/* </Form> */}
      </CardContent>

      <CardFooter className="self-center">
        <Button onClick={handleButtonClick}>Select</Button>
      </CardFooter>
    </Card>
  );
};

export { SearchCard };
