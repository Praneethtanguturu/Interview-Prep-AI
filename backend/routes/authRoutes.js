// thsi creates express which is used to create routes and handle HTTP requests
const express = require("express");

// This imports controller functions that handle the logic for register, login, and profile.
// You should have a file like controllers/authController.js with these functions defined.
const { registerUser , loginUser, getUserProfile } = require("../controllers/authController");

//This imports a middleware function that checks if the user is logged in (usually by verifying a token).
const { protect } = require("../middlewares/authMiddleware");

// This imports a middleware to handle file uploads (like uploading a profile picture) — often built using multer.
const upload = require("../middlewares/uploadMiddleware");

// This initializes an Express router object, so you can define routes and later use it in your main server.js.
const router = express.Router();

//Auth Routes
// This will create a new user in your database
router.post("/register", registerUser); // Register User
router.post("/login", loginUser); // Login User
router.get("/profile", protect, getUserProfile); // Get user Profile


/*
 How This Works:
upload.single("image") handles uploading a single image file with the form field name "image".

If the file is missing, it returns a 400 error.

If the file is uploaded, it returns the image URL like:
{
  "imageUrl": "http://localhost:5000/uploads/image123.png"
}
*/

router.post("/upload-image", upload.single("image"), (req, res) => {
  if(!req.file){
    return res.status(400).json({message:"No file uploaded"});
  }
  const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
  res.status(200).json({imageUrl});
})

// This line exports the router so it can be used in your main server file:
module.exports = router;


