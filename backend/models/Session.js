// this imports Mongoose , which helps u define schemas and interact with MongoDB


const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    role: { type: String, required: true },
    experience: { type: String, required: true },
    topicsToFocus: { type: [String], required: true }, 
    description: String,
    questions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Question" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Session", sessionSchema);


// this code defines how a session ( a learning or interview session ) is stored in MongoDB







// example
/* {
  "_id": "abcd1234",
  "user": "user123",
  "role": "Frontend Developer",
  "experience": "1 year",
  "topicsToFocus": ["React", "JavaScript"],
  "description": "Focus on hooks and lifecycle",
  "questions": ["q1", "q2", "q3"],
  "createdAt": "2025-06-19T10:00:00Z"
}
*/
