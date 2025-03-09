import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger";

// db
import { db } from "./database/db";

// plugins
import { status } from "./plugins/status";

const app = new Elysia()
  .use(swagger())
  .onTransform(({ body, params, path, request: { method } }) => {
    console.log(`${method} ${path}`, {
      body,
      params,
    });
  })
  .use(status)
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
