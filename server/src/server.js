const http = require("http");
const app = require("./app");
const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

const { loadHabitablePlanets } = require("./models/planets.model");

app.get("/", (req, res) => {
  res.send("hello");
});

async function startServer() {
  await loadHabitablePlanets();

  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
}

startServer();
