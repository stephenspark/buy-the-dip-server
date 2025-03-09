import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger";

// db
import { db } from "./database/db";

// plugins
import { status } from "./plugins/status";
import { users } from "./plugins/users";

db.$connect();

const app = new Elysia()
  .use(swagger())
  .onTransform(({ body, params, path, request: { method } }) => {
    console.log(`${method} ${path}`, {
      body,
      params,
    });
  })
  .use(status)
  .use(users)
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
