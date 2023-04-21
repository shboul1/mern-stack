const mongoose = require("mongoose");

mongoose.connection.once("open", () => {
  console.log("MongoDB connected Successfully");
});

mongoose.connection.on("error", (err) => {
  console.log("MongoDB connection error: ", err);
});

const mongodbConnect = () => {
  return mongoose.connect(process.env.MONGO_URL);
};

module.exports = mongodbConnect;
