import express, { response } from "express";
const app = express();

/* CRUD:
 *
 * GET - Fetch book
 * POST - Create book
 * PUT - Update book
 * DELETE - Delete book
 *
 */

app.get("/", (request, response) => {});

app.listen(5000, () => {
  console.log("Server up and running on port 5000");
});
