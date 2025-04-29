import { nanoquery } from "@nanostores/query";
import neo4j from "neo4j-driver";

const db_url = import.meta.env.PUBLIC_DATABASE_BOLT_URL;
const db_user = import.meta.env.PUBLIC_DATABASE_USER;
const db_password = import.meta.env.PUBLIC_DATABASE_PASSWORD;

const driver = neo4j.driver(db_url, neo4j.auth.basic(db_user, db_password), {
  disableLosslessIntegers: true,
});

// export const unknownPlayersStore = createFe
