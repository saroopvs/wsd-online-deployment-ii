import { Application, Router } from "https://deno.land/x/oak@v12.6.1/mod.ts";
import { renderMiddleware } from "./middlewares/renderMiddleware.js";

const app = new Application();
const router = new Router();

app.use(renderMiddleware);

router.get("/", ({ render }) => render("index.eta"));
router.get("/visits", ({ render }) => render("visits.eta"));
router.get("/meaning", ({ render }) => render("meaning.eta"));

app.use(router.routes());

if (!Deno.env.get("TEST_ENVIRONMENT")) {
  app.listen({ port: 7777 });
}

export default app;

