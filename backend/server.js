// this loads the .env file which stores sensitive info like passwords and API keys
require("dotenv").config();
// this imports Express, a framework to create the web server and APIs easily
const express = require("express");
// cors- cross origin resource shring , it allows your frontend to talk to this backend
const cors = require("cors");
// it is used to handle and transform file paths, especially when dealing with file uploads
const path = require("path");
// this line connects your server to a database
const connectDB = require("./config/db");

//Import routes
const authRoutes = require("./routes/authRoutes");
const sessionRoutes = require("./routes/sessionRoutes");
const questionRoutes = require("./routes/questionRoutes");
const { protect } = require("./middlewares/authMiddleware");
const { generateInterviewQuestions, generateConceptExplanation} = require("./controllers/aiController");



// initializing the express application
// express is an node.js frame work that helps u build backend APIs easily
// it creates an server and handles HTTP requests(GET, POST,PUT, DELETE)
// and also express creates an server to listen client requests and connect to databases and handle authentication
const app = express();

// Middleware to handle CORS
// it allows your frontend to send an HTTP Requests like POST, GET, PUT.. without being blocked by the browsers security policy
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

connectDB()

// Middleware
// This tells Express to parse incoming request bodies as JSON, so your backend can understand frontend data.
// Middlewares like express.json() don’t convert the data into JSON — instead, they parse JSON data that’s already sent in the HTTP request and make it usable in your code.
// when a client sends an POST request , it sends an raw JSON file and the middlewares express.json() , middleware reads the JSON , parses it (Parse means to read raw data (like a string) and convert it into a structured format that your code can understand and use.) and attaches req.body = {} 
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/sessions", sessionRoutes);
app.use("/api/questions", questionRoutes);

app.use("/api/ai/generate-questions", protect, generateInterviewQuestions);
app.use("/api/ai/generate-explanation", protect, generateConceptExplanation);


// Server uploads folder
// This exposes an /uploads folder publicly so you can access uploaded files via the browser.
app.use("/uploads", express.static(path.join(__dirname, "uploads"), {}));

// Start server
// This tells Node.js to start listening for requests on port 5009 (or the port defined in your .env file)
const PORT = process.env.PORT || 5009;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));