import { Elysia, t } from "elysia";

export const status = new Elysia()
  .model({
    status: t.String({
      default: `Server is running at ${new Date().toISOString()}`,
    }),
  })
  .get("/status", `Server is running at ${new Date().toISOString()}`, {
    response: "status",
  });
