require("dotenv").config();
const https = require("https");
const fs = require("fs");
const path = require("path");
const express = require("express");
const helmet = require("helmet");
const cardsRouter = require("./routes/cards/cards.router");
const cors = require("cors");
const mongodbConnect = require("./services/mongodb");

const PORT = 443;
const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

const app = express();
app.use(helmet());

app.use(cors(corsOptions));
app.use(express.json());
app.use("/cards", cardsRouter);

app.use(express.static(path.join(__dirname, "..", "public")));
app.get("/*", (req, res) => {
  res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

const server = https.createServer(
  {
    key: fs.readFileSync(path.join(__dirname, "certs", "key.pem")),
    cert: fs.readFileSync(path.join(__dirname, "certs", "cert.pem")),
  },
  app
);

const startServer = async () => {
  await mongodbConnect();
  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer();
