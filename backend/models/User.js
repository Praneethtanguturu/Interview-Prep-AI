// Mongoose is a javascript tool that makes it easy to work with MongoDB inside your Nodejs code
// MongoDB is an NoSQL database - instead of using tables it stores data in JSON Objects , so instead of rows and columns it uses key-value pairs
// Mongoose then lets you save users, find users, or update them easily.
// Mongoose helps me define what kind of the data i want to store, validate it and easily save or get data using code


const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
  {
    name: {type:String, required:true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    profileImageUrl: {type: String, default: null},
  },
  {timestamps: true}
);

module.exports = mongoose.model("User", UserSchema);