require('dotenv').config() // Remove for production
const express = require("express");
const connectDB = require("./config/connectDB");
const mongoose = require("mongoose");

const app = express();

// Routes
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