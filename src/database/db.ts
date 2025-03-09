import { drizzle } from "drizzle-orm/bun-sqlite";
import { Database } from "bun:sqlite";
import { migrate } from "drizzle-orm/bun-sqlite/migrator";

const sqlite = new Database("db.sqlite", { create: true });
const db = drizzle({ client: sqlite });
migrate(db, { migrationsFolder: "./drizzle" });

export { db };
