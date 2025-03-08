import { Player, columns } from "@/components/containers/table/columns";
import { DataTable } from "@/components/containers/table/data-table";

async function getData(): Promise<Player[]> {
  // Fetch data from your API here.
  const api_result = [
    {
      id: 8474668,
      headshot: "https://assets.nhle.com/mugs/nhl/20112012/VAN/8474668.png",
      firstName: {
        default: "Dale",
      },
      lastName: {
        default: "Weise",
      },
      sweaterNumber: 32,
      positionCode: "R",
      shootsCatches: "R",
      heightInInches: 74,
      weightInPounds: 196,
      heightInCentimeters: 188,
      weightInKilograms: 89,
      birthDate: "1988-08-05",
      birthCity: {
        default: "Winnipeg",
      },
      birthCountry: "CAN",
      birthStateProvince: {
        default: "Manitoba",
      },
      hrID: null,
      hdbID: null,
      verified: false,
    },
    {
      id: 8470039,
      headshot: "https://assets.nhle.com/mugs/nhl/20142015/ANA/8470039.png",
      firstName: {
        default: "Tomas",
      },
      lastName: {
        default: "Fleischmann",
      },
      sweaterNumber: 14,
      positionCode: "L",
      shootsCatches: "L",
      heightInInches: 73,
      weightInPounds: 192,
      heightInCentimeters: 185,
      weightInKilograms: 87,
      birthDate: "1984-05-16",
      birthCity: {
        default: "Koprivnice",
        cs: "Kopřivnice",
        fi: "Kopřivnice",
        sk: "Kopřivnice",
        sv: "",
      },
      birthCountry: "CZE",
      hrID: null,
      hdbID: null,
      verified: false,
    },
    {
      id: 8476244,
      headshot: "https://assets.nhle.com/mugs/nhl/20122013/MTL/8476244.png",
      firstName: {
        default: "Raphael",
      },
      lastName: {
        default: "Diaz",
      },
      sweaterNumber: 61,
      positionCode: "D",
      shootsCatches: "R",
      heightInInches: 71,
      weightInPounds: 197,
      heightInCentimeters: 180,
      weightInKilograms: 89,
      birthDate: "1986-01-09",
      birthCity: {
        default: "Baar",
      },
      birthCountry: "CHE",
      hrID: null,
      hdbID: null,
      verified: false,
    },
    {
      id: 8476479,
      headshot: "https://assets.nhle.com/mugs/nhl/20212022/LAK/8476479.png",
      firstName: {
        default: "Phillip",
      },
      lastName: {
        default: "Danault",
      },
      sweaterNumber: 24,
      positionCode: "C",
      shootsCatches: "L",
      heightInInches: 73,
      weightInPounds: 200,
      heightInCentimeters: 185,
      weightInKilograms: 91,
      birthDate: "1993-02-24",
      birthCity: {
        default: "Victoriaville",
      },
      birthCountry: "CAN",
      birthStateProvince: {
        default: "Quebec",
        fr: "Québec",
      },
      hrID: null,
      hdbID: null,
      verified: false,
    },
    {
      id: 8481014,
      headshot: "https://assets.nhle.com/mugs/nhl/20222023/NYI/8481014.png",
      firstName: {
        default: "Alexander",
      },
      lastName: {
        default: "Romanov",
      },
      sweaterNumber: 28,
      positionCode: "D",
      shootsCatches: "L",
      heightInInches: 73,
      weightInPounds: 215,
      heightInCentimeters: 185,
      weightInKilograms: 98,
      birthDate: "2000-01-06",
      birthCity: {
        default: "Moscow",
        cs: "Moskva",
        de: "Moskau",
        fi: "Moskova",
        fr: "Moscou",
        sk: "Moskva",
        sv: "Moskva",
      },
      birthCountry: "RUS",
      hrID: null,
      hdbID: null,
      verified: false,
    },
    {
      id: 8478874,
      headshot: "https://assets.nhle.com/mugs/nhl/20212022/OTT/8478874.png",
      firstName: {
        default: "Adam",
      },
      lastName: {
        default: "Gaudette",
      },
      sweaterNumber: 17,
      positionCode: "C",
      shootsCatches: "R",
      heightInInches: 73,
      weightInPounds: 194,
      heightInCentimeters: 185,
      weightInKilograms: 88,
      birthDate: "1996-10-03",
      birthCity: {
        default: "Braintree",
      },
      birthCountry: "USA",
      birthStateProvince: {
        default: "Massachusetts",
      },
      hrID: null,
      hdbID: null,
      verified: false,
    },
  ];

  return api_result.map((player) => {
    return {
      playerID: player.id,
      firstName: player.firstName.default,
      lastName: player.lastName.default,
      birthDate: player.birthDate,
      birthCity: player.birthCity.default,
      birthCountry: player.birthCountry,
      hrID: player.hrID,
      hdbID: player.hdbID,
      verified: player.verified,
    };
  });
}

const data = await getData();

const PlayerTable = () => {
  return <DataTable columns={columns} data={data} />;
};

export { PlayerTable };
