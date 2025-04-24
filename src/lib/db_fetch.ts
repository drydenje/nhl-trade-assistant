import neo4j from "neo4j-driver";
import { Player } from "@/types/Player";
const db_url = import.meta.env.PUBLIC_DATABASE_BOLT_URL;
const db_user = import.meta.env.PUBLIC_DATABASE_USER;
const db_password = import.meta.env.PUBLIC_DATABASE_PASSWORD;

const driver = neo4j.driver(db_url, neo4j.auth.basic(db_user, db_password), {
  disableLosslessIntegers: true,
});

export async function getData(): Promise<Player[]> {
  // Fetch data from your API here.
  const session = driver.session({
    database: import.meta.env.PUBLIC_DATABASE_INSTANCE,
  });

  const response = await session.run(
    `MATCH (p:Player) 
      WHERE p.hdbId IS NULL
      OR p.hrId IS NULL
      RETURN p AS player 
      ORDER BY p.birthDate DESC;`
  );

  const records = response.records.map((record) => {
    const p = record.get("player");
    return p.properties;
  });

  return records.map((player) => {
    return {
      playerId: player.playerId,
      firstName: player.firstName,
      lastName: player.lastName,
      birthDate: player.birthDate,
      birthCity: player.birthCity,
      birthCountry: player.birthCountry,
      hrId: player.hrId,
      hdbId: player.hdbId,
      verified: player.verified,
    };
  });
}
