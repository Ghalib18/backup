const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json()); // for parsing application/json

const FILE_PATH = "todo.json";

// Helper function to read todos from the file
function readTodos() {
    if (!fs.existsSync(FILE_PATH)) {
        fs.writeFileSync(FILE_PATH, JSON.stringify([]));
    }
    const data = fs.readFileSync(FILE_PATH);
    return JSON.parse(data);
}

// Helper function to write todos to the file
function writeTodos(todos) {
    fs.writeFileSync(FILE_PATH, JSON.stringify(todos, null, 2));
}

// Create a new todo
app.post("/todos", (req, res) => {
    const todos = readTodos();
    const newTodo = {
        id: Date.now(), // simple unique id
        title: req.body.title,
        completed: false
    };
    todos.push(newTodo);
    writeTodos(todos);
    res.status(201).json(newTodo);
});

// Get all todos
app.get("/todos", (req, res) => {
    const todos = readTodos();
    res.json(todos);
});

// Update a todo
app.put("/todos/:id", (req, res) => {
    const todos = readTodos();
    const id = parseInt(req.params.id);
    const todo = todos.find(t => t.id === id);

    if (!todo) {
        return res.status(404).json({ error: "Todo not found" });
    }

    todo.title = req.body.title ?? todo.title;
    todo.completed = req.body.completed ?? todo.completed;

    writeTodos(todos);
    res.json(todo);
});

// Delete a todo
app.delete("/todos/:id", (req, res) => {
    const todos = readTodos();
    const id = parseInt(req.params.id);
    const filteredTodos = todos.filter(t => t.id !== id);

    if (filteredTodos.length === todos.length) {
        return res.status(404).json({ error: "Todo not found" });
    }

    writeTodos(filteredTodos);
    res.json({ message: "Todo deleted" });
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
