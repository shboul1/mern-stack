const mongoose = require("mongoose");

mongoose.connection.once("open", () => {
  console.log("MongoDB connected Successfully");
});

mongoose.connection.on("error", (err) => {
  console.log("MongoDB connection error: ", err);
});

const mongodbConnect = () => {
  return mongoose.connect(
    "mongodb+srv://mern-example:3p5Xn7Dd1wtbu9ez@cluster0.phutjh7.mongodb.net/test"
  );
};

module.exports = mongodbConnect;
