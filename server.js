const express = require("express");
const fs = require("fs");
const { join } = require("path");
const api = require("./routes");

const PORT = 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
app.use("/api", api);

app.get("/notes", (req, res) =>
  res.sendFile(join(__dirname, "public", "notes.html"))
);

app.get("*", (req, res) =>
  res.sendFile(join(__dirname, "public", "index.html"))
);

app.listen(PORT, () =>
  console.log(`Server is open at http://localhost:${PORT}`)
);
