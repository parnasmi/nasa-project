const express = require("express");
const app = express();
const cors = require("cors");
const planetsRouter = require("./routes/planets/planets.router");
const path = require("path");
const morgan = require("morgan");

app.use(cors({ origin: "http://localhost:3000" }));

app.use(morgan("combined"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));
app.use(planetsRouter);

app.get("/", (req, res) => {
  return res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

module.exports = app;
