// backend/routes/userRoutes.js
const express = require("express");
const {
  registerUser,
  loginUser,
  deleteUser,
} = require("../controllers/userController");
const router = express.Router();

// Routes for user registration, login, and admin management
router.post("/register", registerUser);
router.post("/login", loginUser);
router.delete("/admin/user/:id", deleteUser); // Admin route

module.exports = router;
