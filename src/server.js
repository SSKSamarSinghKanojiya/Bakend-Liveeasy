// Importing necessary modules
const dotenv = require("dotenv").config();
const express = require("express");
const { v4: uuidv4 } = require("uuid");
const loadRoutes = require("./routes/loadRoutes");
const connectDB = require("./config/db");

const app = express();

connectDB();
// Initialize app and middleware
app.use(express.json());

// Routes
app.use("/api", loadRoutes);

// Start server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
