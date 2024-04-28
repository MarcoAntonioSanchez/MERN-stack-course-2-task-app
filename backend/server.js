require('dotenv').config() // Remove for production
const express = require("express");
const connectDB = require("./config/connectDB");
const mongoose = require("mongoose");
const Task = require("./model/task-model")

const app = express();

// Middleware
app.use(express.json()); // Enabling json format as express middleware to API data POST.
app.use(express.urlencoded({extended: true}));

// Middleware example, this can be set after the "api/tasks", and the async attributes of avery route
// const logger = (req, res, next) => { // Next method is a must for a middleware
//     console.log("Middleware ran");
//     console.log(req.method);
//     next(); // After the data treatment, you pass to the next function of the route.
// };

// Routes
app.get("/", (req, res)=> {
    res.send("Home Page");
})

// Create a task
app.post("/api/tasks", async (req, res)=> {
    try {
        const task = await Task.create(req.body); // Calling MongoDB create method to retrieve data into DB.
        res.status(200).json(task); // Setting a 200 - ok status allong with the task just created data response from the server.
    } catch (error) {
        console.log("Error on task creation...");
        res.status(500).json({msg: error.message}); // Setting a 500 error status code and retrieving the error / message.
    }
});

// Get or read tasks
app.get("/api/tasks", async (req, res)=> {
    
})

const PORT  = process.env.PORT || 5000; // Use of environment variables for port number, or, directly 5000

// One way to connect to mongoDB
mongoose
.connect(process.env.MONGO_URI)
.then(()=> {
    app.listen(PORT, ()=> { // Now the PORT variable contain's the port number.
        console.log(`Server running on port ${PORT}`);
    })
})
.catch((err) => console.log(err));

// Alternative way to connect to mongoDB
// const startServer = async () => {
//     try {
//         await connectDB()
//         app.listen(PORT, ()=> { // Now the PORT variable contain's the port number.
//             console.log(`Server running on port ${PORT}`);
//         });
//     } catch (error) {
//         console.log("RVN - Error detected on server start:");
//         console.log(error);
//     }
// }
// startServer();