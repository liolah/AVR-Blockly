const express = require("express");
const cors = require("cors");
const cmd = require("node-cmd");

const app = express();
const port = 3600;

app.use(cors());

app.get("/", (_req, res) => {
  const syncDir = cmd.runSync("make hello");
  res.send(syncDir.data);
});

app.listen(port, () =>
  console.log(`App listening on port ${port}! use http://localhost:${port}/`)
);
