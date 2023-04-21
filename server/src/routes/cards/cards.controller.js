const {
  getAllCards,
  getCardById,
  createCard,
  deleteCard,
} = require("../../models/cards/cards.model");

async function httpGetAllCards(req, res) {
  res.send(await getAllCards());
}

async function httpPostCard(req, res) {
  const data = req.body;
  try {
    await createCard(data);
    res
      .status(201)
      .json({ status: "success", message: "card created", card: data });
  } catch (error) {
    res
      .status(400)
      .json({ status: "error", message: "error creating card", error });
  }
  return;
}

async function httpGetCard(req, res) {
  const { id } = req.params;
  const card = await getCardById(id);
  return res.json(card);
}

async function httpDeleteCard(req, res) {
  const { id } = req.params;
  const deletedCard = await getCardById(id);
  try {
    await deleteCard(id);
    res.status(200).json({
      status: "success",
      message: "card deleted",
      card: deletedCard,
    });
  } catch (error) {
    res
      .status(400)
      .json({ status: "error", message: "error deleting card", error });
  }
}

module.exports = {
  httpGetAllCards,
  httpPostCard,
  httpGetCard,
  httpDeleteCard,
};
