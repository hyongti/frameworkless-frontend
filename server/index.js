import express from "express";
import { v4 } from "uuid";
import bodyParser from "body-parser";

const app = express();
const PORT = 8080;
let todos = [];

app.use(bodyParser.json());

app.get("/api/todos", (req, res) => {
  console.log("get");

  res.send(todos);
});

app.post("/api/todos", (req, res) => {
  console.log("post");
  console.log(todos);

  const newTodo = {
    completed: false,
    ...req.body,
    id: v4(),
  };

  todos.push(newTodo);

  res.status(201);
  res.send(newTodo);
});

app.patch("/api/todos/:id", (req, res) => {
  console.log("patch");
  const updateIndex = todos.findIndex((todo) => todo.id === req.params.id);

  const oldTodo = todos[updateIndex];

  const newTodo = {
    ...oldTodo,
    ...req.body,
  };

  todos[updateIndex] = newTodo;

  res.send(newTodo);
});

app.delete("/api/todos/:id", (req, res) => {
  console.log("delete");
  console.log(todos);
  todos = todos.filter((todo) => todo.id !== req.params.id);

  res.status(204);
  res.send();
});

app.listen(PORT);
