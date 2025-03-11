import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import { Player } from "@/types/Player";

const PlayerCard = ({ player }) => {
  // console.log("Player:", player);
  return (
    <Card className="place-self-center">
      <CardHeader>
        <CardTitle>{player.name}</CardTitle>
        <CardDescription>{player.birthCity}</CardDescription>
      </CardHeader>
      <CardContent>
        {/* name: 'Elias Pettersson'
        hdbID: '186266' 
        birthDate: '1998-11-12'
        birthCity: 'Sundsvall' */}
        <p>
          <span>Birth Date: </span>
          {player.birthDate}
        </p>
        {player?.hdbID && (
          <p>
            <span>HdbID: </span>
            {player.hdbID}
          </p>
        )}
        {player?.hrID && (
          <p>
            <span>HrID: </span>
            {player.hrID}
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
