require('dotenv').config() // Remove for production
const express = require("express");
const connectDB = require("./config/connectDB");
const mongoose = require("mongoose");
const Task = require("./models/task-model")
const taskRoutes = require("./routes/taskRoute");

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
app.use("/api/tasks", taskRoutes);
// Home or main route
app.get("/", (req, res)=> {
    res.send("Home Page");
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