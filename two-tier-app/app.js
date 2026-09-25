
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

const MONGO_URL =
  process.env.MONGO_URL || "mongodb://mongo:27017/demo";

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err.message);
  });

app.get("/", (req, res) => {
  res.send("Hello! Node.js + MongoDB 2-Tier Application is Running");
});

app.get("/health", (req, res) => {
  res.json({
    status: "UP",
    application: "Node.js",
    database: "MongoDB"
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});

