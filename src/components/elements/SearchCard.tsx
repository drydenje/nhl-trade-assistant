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
  // console.log("SITE:", site);
  const {
    playerId,
    firstName,
    lastName,
    birthDate,
    birthCity,
    birthCountry,
    hrId,
    hdbId,
    verified,
  }: Player = player;
  const [siteId, setSiteId] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSiteId(event.target.value);
  };

  const handleButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    // console.log(player);
    // console.log("SEARCH_CARD SITE:", siteId);
    // site === Site.HockeyReference ? console.log("HR") : undefined;

    const p: UpdatePlayer = {
      playerId,
      id: null,
      uuid: uuidv4(),
      name: `${firstName} ${lastName}`,
      birthCity,
      birthDate,
      hdbId: site === Site.HockeyDB ? siteId : undefined,
      hrId: site === Site.HockeyReference ? siteId : undefined,
    };

    // console.log("hdbId:", p.hdbId);
    // console.log("hrId:", p.hrId);

    addPlayerToUpdate(playerId, p);

    // console.log(p);

    // let query = null;
    // switch (site) {
    //   case Site.HockeyDB:
    //     query = `
    //       MATCH (p:Player {playerId: ${playerId}})
    //       SET p.hdbId = ${siteId}
    //       RETURN p;
    //     `;
    //     break;
    //   case Site.HockeyReference:
    //     query = `
    //       MATCH (p:Player {playerId: ${playerId}})
    //       SET p.hrId = ${siteId}
    //       RETURN p;
    //     `;
    //     break;
    //   default:
    //     console.error("Unknown site:", site);
    //     return;
    // }

    // MATCH (p:Player {playerId: playerId})
    // SET p.surname = 'Taylor'
    // RETURN p;

    // console.log(`SITE ID: ${siteId}`);

    // playerId: number, { id, name, birthCity, birthDate };

    // const target = event.target as HTMLButtonElement;
    // if (target) console.log(`VAL: "${target.value}"`);

    // addPlayerToUpdate(nhlPlayer.playerId, player);
    // console.log(`${firstName} ${lastName}: ${playerId} -> `);
    // console.log(`${playerId} -> `);
    // console.log(player);
    // console.log(e);

    // {
    //   "uuid": "7cce9150-9c59-471f-a110-41f55df7f2b9",
    //   "playerId": 8447348,
    //   "name": "Jack Laviolette",
    //   "birthCity": "Belleville",
    //   "birthDate": "1879-07-17",
    //   "id": null,
    //   "hrId": "lavioja01"
    // },

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
