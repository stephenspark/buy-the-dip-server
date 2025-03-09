import { Elysia, t } from "elysia";
import { db } from "../database/db";

export const users = new Elysia()
  .model({
    user: t.Object({
      id: t.Number(),
      username: t.String(),
      password: t.String(),
      createdAt: t.Date(),
      updatedAt: t.Date(),
    }),
    createUser: t.Object({
      username: t.String(),
      password: t.String({
        minLength: 8,
      }),
    }),
    updateUser: t.Object({
      username: t.Optional(t.String()),
      password: t.Optional(
        t.String({
          minLength: 8,
        })
      ),
    }),
  })
  .get("/users", async () => await db.users.findMany())
  .post("/users", async ({ body }) => db.users.create({ data: body }), {
    body: "createUser",
    response: "user",
  })
  .put(
    "/users/:id",
    async ({ body, params }) =>
      db.users.update({
        data: body,
        where: { id: Number(params.id) },
      }),
    {
      body: "updateUser",
      response: "user",
    }
  )
  .delete("/users/:id", async ({ params }) =>
    db.users.delete({
      where: { id: Number(params.id) },
    })
  );
