const express = require("express");

const app = express();

const PORT  = process.env.PORT || 5000; // Use of environment variables for port number, or, directly 5000
app.listen(PORT, ()=> { // Now the PORT variable contain's the port number.
    console.log(`Server running on port ${PORT}`);
});