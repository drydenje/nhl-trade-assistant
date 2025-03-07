import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// const player = {
//   headshot,
//   firstName,
//   lastName,
//   fullName,
//   sweaterNumber,
//   positionCode,
//   shootsCatches,
//   heightInInches,
//   weightInPounds,
//   heightInCentimeters,
//   weightInKilograms,
//   birthDate,
//   birthCity,
//   birthCountry,
//   birthStateProvince,
//   hrID,
//   hdbID,
//   verified,
// };

const player = {
  lastName: "Bethel",
  birthStateProvince: "QC",
  verified: false,
  positionCode: "L",
  fullName: "John Bethel",
  hdbID: "7540",
  birthCity: "Montréal",
  birthDate: "1957-01-15",
  weightInKilograms: 84,
  heightInCentimeters: 180,
  sweaterNumber: 21,
  firstName: "John",
  heightInInches: 71,
  hrID: "bethejo01",
  headshot: "https://assets.nhle.com/mugs/nhl/19791980/WIN/8445454.png",
  birthCountry: "CAN",
  weightInPounds: 185,
  id: 8445454,
  shootsCatches: "L",
};

const PlayerCard = () => {
  return (
    <Card className="place-self-center">
      <CardHeader>
        <CardTitle>{player.fullName}</CardTitle>
        <CardDescription>
          {player.birthCity}, {player.birthCountry}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>id: 8445454</p>
        <p>hdbID: "7540"</p>
        <p>hrID: "bethejo01"</p>
        <p>birthDate: "1957-01-15"</p>
        <p>birthStateProvince: "QC"</p>
        <p>verified: false</p>
        <p>positionCode: "L"</p>
        <p>fullName: "John Bethel"</p>
      </CardContent>
      {/* <CardFooter>
        <p>Card Footer</p>
      </CardFooter> */}
    </Card>
  );
};

export { PlayerCard };
