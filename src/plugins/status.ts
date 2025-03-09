import { Elysia } from "elysia";

export const status = new Elysia().get(
  "/status",
  `Server is running at ${new Date().toISOString()}`
);
