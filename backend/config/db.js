const mongoose = require('mongoose');

// it defines an function to connefct your node.js app to MongoDB using Mongoose
const connectDB = async () => {
  try {
    // process.env.MONGO_URI means it reads the database URL from your .env file (a hidden file that stores private data like DB passwords).
    await mongoose.connect(process.env.MONGO_URI, {});
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
    process.exit(1);
  }
};

// This exports the connectDB function so you can import and call it from your main server file like below
/* 
const connectDB = require('./config/db');
connectDB(); 
Connects to the database before starting the server
*/

module.exports = connectDB;




