const Task  = require("../models/task-model");

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body); // Calling MongoDB create method to retrieve data into DB.
        res.status(200).json(task); // Setting a 200 - ok status allong with the task just created data response from the server.
    } catch (error) {
        console.log("Error on task creation...");
        res.status(500).json({msg: error.message}); // Setting a 500 error status code and retrieving the error / message.
    }
};

const getTasks = async (req, res) => {
    try { // try / catch block
        const tasks = await Task.find(); // Get all tasks, with await
        res.status(200).json(tasks); // Status 200 for ok response
        console.log(tasks);
    } catch (error) { // Error catch
        console.log("RVN - Error ocure while getting tasks from DB"); // Error handling
        res.status(500).json({msg: error.message}); // Respond with a json message (erorr).
    }
}

const getTask = async (req, res) => {
    try {
        const {id} = req.params; // Getting the id param from the API url.
        const task = await Task.findById(id); // Using Task model to find the task with proportionated ID.
        if (!task) {  // If the Task id it's not found, then...
            return res.status(404).json(`No task with ID: ${id}`); // Status code for 404 not found and the corresponding message.
        }
        res.status(200).json(task); // If the task was found by it's ID, then reponse with 200 status code and the task as json.
    } catch (error) {
        console.log("RVN - Error getting that single task...");
        res.status(500).json({msg: error.message}); // For DB error handling.
    }
}

const deleteTask = async (req, res) => {
    try {
        const {id} = req.params;
        const task = await Task.findByIdAndDelete(id); // Find task by it's ID and delete, function from mongoose Task model.
        if (!task) {
            return res.status(404).json(`No task with ID ${id}`);
        }
        res.status(200).send("Task deleted");
    } catch (error) {
        res.tatus(500).json({msg: error.message});
    }
}

module.exports = { createTask, getTasks, getTask, deleteTask };