const express = require("express"); // You require express here as well.
const Task = require("../model/task-model"); // You are going to need the Task model.
const router = express.Router(); // And a express router for routes exporting.

// Home or main route
router.get("/", (req, res)=> {
    res.send("Home Page");
})

// Create a task
router.post("/api/tasks", async (req, res)=> {
    try {
        const task = await Task.create(req.body); // Calling MongoDB create method to retrieve data into DB.
        res.status(200).json(task); // Setting a 200 - ok status allong with the task just created data response from the server.
    } catch (error) {
        console.log("Error on task creation...");
        res.status(500).json({msg: error.message}); // Setting a 500 error status code and retrieving the error / message.
    }
});

// Get or read tasks
router.get("/api/tasks", async (req, res)=> { // async arrow function
    try { // try / catch block
        const tasks = await Task.find(); // Get all tasks, with await
        res.status(200).json(tasks); // Status 200 for ok response
    } catch (error) { // Error catch
        console.log("RVN - Error ocure while getting tasks from DB"); // Error handling
        res.status(500).json({msg: error.messaje}); // Respond with a json message (erorr).
    }
})

module.exports = router; // Yuo only need to export the router, that's why the routes start with "router.get, router.post, etc.".