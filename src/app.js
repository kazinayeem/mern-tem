const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/db"); // Import the database connection function
const createError = require("http-errors");
const xss = require("xss-clean");
const { rateLimit } = require("express-rate-limit");
const setupAdmin = require("./utils/addAdmin");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  standardHeaders: "draft-7",
  legacyHeaders: false,
  message: "server down",
});

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(xss());
app.use(limiter);
connectDB();

// setupAdmin();

// Define a basic route
app.get("/", (req, res) => {
  res.send("Hello from the backend!");
});

app.use(function (req, res, next) {
  next(createError(404, "not found"));
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "server error",
  });
});
module.exports = app;
