const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const router = express.Router();

// Register route
router.post("/register", async (req, res) => {
  const { email, password } = req.body;
  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Login route
// router.post("/login", async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     console.log("Incoming login request:", { email, password });

//     // Find the user in the database
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(401).json({ message: "Invalid email or password" });
//     }

//     // Compare passwords
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(401).json({ message: "Invalid email or password" });
//     }

//     // Generate JWT
//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
//       expiresIn: "1h",
//     });

//     console.log("Login successful:", { email });
//     res.status(200).json({ token, user: { email: user.email } });
//   } catch (error) {
//     console.error("Login error:", error.message);
//     res.status(500).json({ message: "Server error" });
//   }
// });

router.post("/login", async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email" });
    }

    // Generate JWT
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    console.log("Login successful:", { email });
    res.status(200).json({ token, user: { email: user.email } });
  } catch (error) {
    console.error(`Login error: ${error.message}`); // Debugging log
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
