const express = require("express");
const cors = require("cors"); // Add this line
const app = express();
const client = require("./db");
const port = 3000;
const jwt = require('jsonwebtoken');

// Enable CORS
app.use(cors()); // Add this line

// Initialize the database connection
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

// Parse incoming request bodies with JSON payloads
app.use(express.json());

// Parse incoming request bodies with URL-encoded payloads
app.use(express.urlencoded({ extended: true }));

// JWT
const secretKey = "test";

// Routes
const loginRoute = require('./routes/login');
const usersRoute = require('./routes/users');

// Connection
client.connect();

// CRUD operations
app.use('/users', usersRoute);
app.use('/login', loginRoute);
