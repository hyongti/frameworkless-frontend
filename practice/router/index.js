import createRouter from "./router.js";
import createPages from "./pages.js";

const container = document.querySelector("main");

const pages = createPages(container);

const router = createRouter();
console.log(router);

router
  .addRoute("#/", pages.home)
  .addRoute("#/list", pages.list)
  .setNotFound(pages.notFound)
  .start();
