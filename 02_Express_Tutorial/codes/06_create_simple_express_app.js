// Create a simple express app.

const express = require("express");
const app = express();

// Invokes callback when user sends a get request for "/"
app.get("/", (req, res) => {
  console.log("User hit the root resource.");
  res.send("Hello World!");
});

// Invokes callback when user sends a get request for "/about"
app.get("/about", (req, res) => {
  res.status(200).send("This is the about page.");
});

// For all other resources which are unavailable.
app.all("*", (req, res) => {
  res.status(404).send("Resource not found.");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
