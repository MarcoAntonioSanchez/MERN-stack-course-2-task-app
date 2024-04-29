const express = require("express"); // You require express here as well.
const Task = require("../models/task-model"); // You are going to need the Task model.
const router = express.Router(); // And a express router for routes exporting.
const {createTask, getTasks, getTask, deleteTask, updateTask} = require("../controllers/taskController");

router.route("/") // Cleaner example of code, refactoring routes with corresponding requests.
.get(getTasks)
.post(createTask);
// Create a task
// router.post("/", createTask);
// Get or read tasks
// router.get("/", getTasks);

router.route("/:id")
.get(getTask)
.delete(deleteTask)
.patch(updateTask);
// Get a single task
// router.get("/:id", getTask);
// Delete a single task
// router.delete("/:id", deleteTask);
// Update a task
// router.put("/api/tasks/:id", updateTask)
// router.patch("/:id", updateTask) // Patch method for use case's where you just need to update a single field / attribute from the registry / DB object.

module.exports = router; // Yuo only need to export the router, that's why the routes start with "router.get, router.post, etc.".