const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  name: String,
});

module.exports = mongoose.model("Card", cardSchema);
