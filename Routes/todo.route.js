const express = require("express");
const { TodoModel } = require("../models/todo.models");

const todoRoutes = express.Router();

todoRoutes.get("/", async (req, res) => {
  try {
    await TodoModel.find();
    res.send("Show Data");
  } catch (err) {
    console.log(err);
    res.send("Something went wrong");
  }
});

todoRoutes.post("/create", async (req, res) => {
  try {
    await TodoModel.insertMany(req.body);
    res.send("Data Added");
  } catch (err) {
    console.log(err);
    res.send("Something went wrong");
  }
});

todoRoutes.patch("/:todoId", async (req, res) => {
  const id = req.params.todoId;
  try {
    await TodoModel.findByIdAndUpdate({ _id: id }, req.body);
    res.send("Data Edited");
  } catch (err) {
    console.log(err);
    res.send("Something went wrong");
  }
});

todoRoutes.delete("/:todoId", async (req, res) => {
  const id = req.params.todoId;
  console.log(id);
  try {
    await TodoModel.findByIdAndDelete({ _id: id });
    res.send("Data Deleted");
  } catch (err) {
    console.log(err);
    res.send("Something went wrong");
  }
});

module.exports = { todoRoutes };
