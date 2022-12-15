const notes = require("express").Router()
const fs = require("fs")
const { join } = require("path")

notes.get("/", (req, res => {
  console.log(`${req.method} request received!`);
  fs.readFile(join(__dirname, "..", "db", "db.json")).then((data) => {
    res.json(JSON.parse(data))
  });
}))

notes.post("/", (req, res => {
  console.log(`${req.method} request received!`)
  fs.appendFile(req.body, join(__dirname, "..", "db", "db.json")).then((data) => {
    res.
  })
}))

notes.delete("/:id", (req, res => {
  console.log(`${req.method} request received!`)
  fs.readFile(join(__dirname, "..", "db", "db.json")).then((data, {id: req.parama.id}), (err) => {
    if (err) throw err;
    if data.
  })
}))