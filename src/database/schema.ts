import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";

export const user = sqliteTable("user", {
  id: integer("id").primaryKey(),
  username: text("username").notNull(),
  password: text("password").notNull(),
  createdAt: text("created_at").default("CURRENT_TIMESTAMP").notNull(),
  updatedAt: text("updated_at").default("CURRENT_TIMESTAMP").notNull(),
});

export const table = {
  user,
} as const;

export type Table = typeof table;
