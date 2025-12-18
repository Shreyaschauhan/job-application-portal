const express = require("express");
const cors = require("cors");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// Health check
app.get("/", (req, res) => {
  res.send("Job Application Portal API is running");
});

module.exports = app;
