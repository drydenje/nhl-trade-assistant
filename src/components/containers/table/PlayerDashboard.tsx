import { columns } from "@/components/containers/table/columns";
import { Player } from "@/types/Player";
import neo4j from "neo4j-driver";
import { DataTable } from "@/components/containers/table/data-table";

const driver = neo4j.driver(
  import.meta.env.PUBLIC_DATABASE_BOLT_URL,
  neo4j.auth.basic(
    import.meta.env.PUBLIC_DATABASE_INSTANCE,
    import.meta.env.PUBLIC_DATABASE_PASSWORD
  ),
  { disableLosslessIntegers: true }
);

async function getData(): Promise<Player[]> {
  // Fetch data from your API here.
  const session = driver.session();
  const response = await session.run(
    `MATCH (p:Player) 
      WHERE p.hdbID = 'undefined'
      OR p.hrID = 'undefined'
      RETURN p AS player 
      ORDER BY p.birthDate DESC`
  );

  const records = response.records.map((record) => {
    const p = record.get("player");

    return p.properties;
  });

  return records.map((player) => {
    return {
      playerID: player.id,
      firstName: player.firstName,
      lastName: player.lastName,
      birthDate: player.birthDate,
      birthCity: player.birthCity,
      birthCountry: player.birthCountry,
      hrID: player.hrID,
      hdbID: player.hdbID,
      verified: player.verified,
    };
  });
}

const data = await getData();

console.log("Players remaining:", data.length);

const PlayerDashboard = () => {
  return <DataTable columns={columns} data={data} />;
};

export { PlayerDashboard };
