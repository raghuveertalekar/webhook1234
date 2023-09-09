// Add Express
const express = require("express");

// Initialize Express
const app = express();

// Create GET request
app.get("/", (req, res) => {
  res.send("Express on Vercel-2");
});

// Create GET request
app.get("/webhook", (req, res) => {
  res.send("Express on Vercel-webhook");
});

// Initialize server
app.listen(5000, () => {
  console.log("Running on port 5000.");
});

// Export the Express API
module.exports = app;
