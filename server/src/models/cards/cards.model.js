const cards = require("./cards.mongo");

function getAllCards() {
  return cards.find({});
}

function getCardById(id) {
  return cards.findById(id);
}

function createCard(card) {
  return cards.create(card);
}

function deleteCard(id) {
  return cards.findByIdAndDelete(id);
}

module.exports = {
  getAllCards,
  getCardById,
  createCard,
  deleteCard,
};
