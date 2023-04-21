const express = require("express");
const helmet = require("helmet");
const cardsRouter = require("./routes/cards/cards.router");
const cors = require("cors");
const mongodbConnect = require("./services/mongodb");
require("dotenv").config();
const PORT = 8000;
const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

const app = express();
app.use(helmet());
app.use(cors(corsOptions));
app.use(express.json());
app.use("/cards", cardsRouter);

const startServer = async () => {
  await mongodbConnect();
  app.listen(PORT, () => {
    console.log();
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer();
