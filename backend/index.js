require('dotenv').config();
const express = require('express');

const connectToMongo = require('./utils/db'); 
// Assuming this file exports a function to connect to MongoDB
const Authroute = require('./router/router-reg'); // Assuming this file defines authentication routes
const AuthContact = require('./router/router-contactus');
const AuthService=require("./router/router-service");
const errorMiddleware=require('./middleware/validate-error')
const cors = require('cors');

const app = express();
const port = process.env.PORT || 8080; // Use the port from environment variables or default to 5000



app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse incoming JSON requests

// Routes
app.use('/api/auth', Authroute); // Authentication routes
app.use('/api/form', AuthContact); // Contact form routes
app.use('/api/Provider',AuthService);
app.use(errorMiddleware);
// Connect to MongoDB
connectToMongo().catch(error => {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process with an error code
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
