const express = require("express"); // You require express here as well.
const Task = require("../models/task-model"); // You are going to need the Task model.
const router = express.Router(); // And a express router for routes exporting.
const {createTask, getTasks} = require("../controllers/taskController");

// Home or main route
router.get("/", (req, res)=> {
    res.send("Home Page");
})

// Create a task
router.post("/api/tasks", createTask);

// Get or read tasks
router.get("/api/tasks", getTasks);

module.exports = router; // Yuo only need to export the router, that's why the routes start with "router.get, router.post, etc.".