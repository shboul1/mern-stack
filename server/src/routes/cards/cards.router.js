const express = require("express");
const {
  httpGetAllCards,
  httpPostCard,
  httpGetCard,
  httpDeleteCard,
} = require("./cards.controller");
const cardsRouter = express.Router();

cardsRouter.get("/", httpGetAllCards);
cardsRouter.post("/", httpPostCard);
cardsRouter.get("/:id", httpGetCard);
cardsRouter.delete("/:id", httpDeleteCard);

module.exports = cardsRouter;
