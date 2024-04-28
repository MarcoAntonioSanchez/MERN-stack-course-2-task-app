const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({ // Creating a schema first to be used with the mongoDB model.
    name: { // Name for the task
        type: String, // Must be a type string
        required: [true, "Please add a task"] // Required is a must with an false case "error" message
    },
    completed: { // Is the task completed or not?
        type: Boolean, // Accepts true or false
        required: true, // Must be required
        default: false // No defaults
    }
},
{
    timestamps: true // This will generate the corresponding timestamps for each DB entry
}
);

const Task = mongoose.model("Task", taskSchema); // Saving the MngoDB taskSchema into a Task model.

module.exports = Task; // Export for re use