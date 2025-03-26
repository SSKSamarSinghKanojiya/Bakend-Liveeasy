const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const URL = process.env.MongoDB_Connection
    await mongoose.connect(URL);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log("Failed to connect to MongoDB:", err);
  process.exit(1)
  }
};

module.exports = connectDB;

