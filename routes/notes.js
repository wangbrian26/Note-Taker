const notes = require("express").Router();
const fs = require("fs");
const { join } = require("path");
const { v4: uuidv4 } = require("uuid");

notes.get("/", (req, res) => {
  console.log(`${req.method} request received!`);
  fs.readFile(join(__dirname, "..", "db", "db.json"), (err, data) => {
    if (err) throw err;
    res.json(JSON.parse(data));
  });
});

notes.post("/", (req, res) => {
  console.log(`${req.method} request received!`);
  const newNote = { title: req.body.title, text: req.body.text, id: uuidv4() };
  fs.readFile(join(__dirname, "..", "db", "db.json"), (err, data) => {
    if (err) throw err;
    let notes = JSON.parse(data);
    notes.push(newNote);
    fs.writeFile(
      join(__dirname, "..", "db", "db.json"),
      JSON.stringify(notes),
      (err, data) => {
        if (err) throw err;
        res.json(req.body);
      }
    );
  });
});

notes.delete("/:id", (req, res) => {
  console.log(`${req.method} request received!`);
  fs.readFile(join(__dirname, "..", "db", "db.json"), (err, data) => {
    let filterNotes = JSON.parse(data).filter(
      (note) => note.id !== req.params.id
    );
    fs.writeFile(
      join(__dirname, "..", "db", "db.json"),
      JSON.stringify(filterNotes),
      (err, data) => {
        if (err) throw err;
        res.json({ message: "Note deleted" });
      }
    );
  });
});

module.exports = notes;
